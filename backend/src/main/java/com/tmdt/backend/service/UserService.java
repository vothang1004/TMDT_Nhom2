package com.tmdt.backend.service;

import com.tmdt.backend.model.User;
import com.tmdt.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
    }

    public User findById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("user id not found"));
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }


    public User save(User user) {
        return userRepository.save(user);
    }



    //user
    public void login(String userName,String password) {

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
