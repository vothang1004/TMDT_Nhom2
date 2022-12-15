package com.tmdt.backend.controller;

import com.tmdt.backend.model.User;
import com.tmdt.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping("/user-list")
    public List<User> userList() {
        return repository.findAll();
    }
}
