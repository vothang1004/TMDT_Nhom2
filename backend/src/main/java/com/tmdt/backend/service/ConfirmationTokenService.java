package com.tmdt.backend.service;

import com.tmdt.backend.model.ConfirmationToken;
import com.tmdt.backend.repository.ConfirmationTokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {
    private final ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    MongoOperations mongoOperations;

    public void saveConfirmationToken(ConfirmationToken token) {
        confirmationTokenRepository.save(token);
    }

    public Optional<ConfirmationToken> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }

    private ConfirmationToken updateConfirmedAt(String token, LocalDateTime localDateTime) {
        ConfirmationToken confirmationToken = mongoOperations.findOne(query(where("token").is(token)), ConfirmationToken.class,"ConfirmationToken");
        System.out.println(confirmationToken);
        confirmationToken.setConfirmedAt(localDateTime);
        ConfirmationToken confirmationTokenUpdated = mongoOperations.save(confirmationToken, "ConfirmationToken");
        return confirmationTokenUpdated;
    }

    public int setConfirmedAt(String token) {
        return (updateConfirmedAt(token, LocalDateTime.now()) != null) ? 1 : -1;
    }
}
