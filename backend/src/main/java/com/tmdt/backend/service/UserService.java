package com.tmdt.backend.service;

import com.tmdt.backend.model.ConfirmationToken;
import com.tmdt.backend.model.Role;
import com.tmdt.backend.model.User;
import com.tmdt.backend.repository.RoleRepository;
import com.tmdt.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
@AllArgsConstructor
@Slf4j
public class UserService implements UserDetailsService {
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private final static String USER_NOT_FOUND = "Username not found";
    private final static String ROLE_NOT_FOUND = "Role not found";
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ConfirmationTokenService confirmationTokenService;


    @Autowired
    MongoOperations mongoOperations;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findUsernameByQuery(username);
        if(user == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        } else {
            log.info("User found in the database: {}", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    public User findUsernameByQuery(String username) {
        return mongoOperations.findOne(query(where("username").is(username)), User.class,"user");
    }

    public User findById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("user id not found"));
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("user id not found"));
    }

    public Role findByRoleName(String roleName) {
        return roleRepository.findByName(roleName)
                .orElseThrow(() -> new UsernameNotFoundException(String.format(ROLE_NOT_FOUND, roleName)));
    }

    public void changeUserRoleToAdmin(String role, String userName) {
        User user = findByUsername(userName);
        Role adminRole = findByRoleName("admin");

        if(user != null && adminRole != null) {
            user.setRole(adminRole);
        }
    }

    public void changeAdminRoleToUser(String role, String userName) {
        User user = findByUsername(userName);
        Role userRole = findByRoleName("user");

        if(user != null && userRole != null) {
            user.setRole(userRole);
        }
    }

    public String signUpUser(User user) {
        boolean userExists = (userRepository.findByUsername(user.getUsername()).isPresent()) || (userRepository.findByEmail(user.getEmail()).isPresent());
        Role userRole = findByRoleName("user");

        if(userExists) {
            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);
        user.setRole(userRole);

        userRepository.save(user);

        // Send confirmation token
        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(), LocalDateTime.now().plusMinutes(15), user);
        confirmationTokenService.saveConfirmationToken(confirmationToken);

        // Send email
        return token;
    }



    public int enableUser(String email) {
        //find
        User user = mongoOperations.findOne(query(where("email").is(email)), User.class,"user");
        System.out.println(user);
        user.setEnabled(true);
        User userUpdated = mongoOperations.save(user, "user");

        if(userUpdated != null) {
            return 1;
        } else {
            return -1;
        }
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
