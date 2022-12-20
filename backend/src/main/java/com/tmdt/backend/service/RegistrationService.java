package com.tmdt.backend.service;

import com.tmdt.backend.dto.SignupDTO;
import com.tmdt.backend.model.ConfirmationToken;
import com.tmdt.backend.model.Role;
import com.tmdt.backend.model.User;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
@Slf4j
public class RegistrationService {
    private final UserService userService;
    private EmailValidator emailValidator;
    private final ConfirmationTokenService confirmationTokenService;

    @Transactional
    public String confirmToken(String token) {
        ConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("email already confirmed");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("token expired");
        }

        confirmationTokenService.setConfirmedAt(token);
        userService.enableUser(
                confirmationToken.getUser().getEmail());
        return "confirmed";
    }

    public String register(SignupDTO request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        if(!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        return userService.signUpUser(new User(request.getUsername(), request.getEmail(), request.getPassword(), new Role(request.getRole()),request.getGender()));
    }
}
