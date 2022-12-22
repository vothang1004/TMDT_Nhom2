package com.tmdt.backend.email;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class EmailService implements EmailSender{
//    private final JavaMailSender mailSender;
    
    @Override
    public void send(String to, String email) {

    }
}
