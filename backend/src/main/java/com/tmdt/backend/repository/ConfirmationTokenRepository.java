package com.tmdt.backend.repository;

import com.tmdt.backend.model.ConfirmationToken;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ConfirmationTokenRepository extends MongoRepository<ConfirmationToken, String> {
    Optional<ConfirmationToken> findByToken(String token);
}
