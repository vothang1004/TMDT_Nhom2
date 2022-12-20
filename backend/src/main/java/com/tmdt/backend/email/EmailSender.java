package com.tmdt.backend.email;

public interface EmailSender {
    void send(String to, String email);
}
