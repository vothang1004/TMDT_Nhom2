package com.tmdt.backend.service;

import com.tmdt.backend.model.User;
import com.tmdt.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }


    public User save(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findById(String id) {
        return  userRepository.findById(id);
    }

    //user
    //login by email only.
    public void login(String email,String password) {

    }
    public void register() {

    }
    public void googleLogin() {

    }
    public void facebookLogin() {

    }
    public void logOut() {

    }
    //forgot password
    public void resetPassword() {

    }
    public void changePassword() {

    }


}
