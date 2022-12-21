package com.tmdt.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "RefreshToken")
@Data
public class RefreshToken {
    @Id
    private String id;

    @DocumentReference
    private User owner;
}
