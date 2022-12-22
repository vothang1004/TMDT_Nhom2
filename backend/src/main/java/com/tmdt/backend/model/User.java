package com.tmdt.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "User")
@Data
public class User implements UserDetails {
    @Id
    private String id;
    @Indexed(unique = true)
    @NonNull
    private String username;
    @Indexed(unique = true)
    @NonNull
    private String email;
    @NonNull
//    @JsonIgnore
    private String password;
    private int score;
    @DocumentReference(lazy=true)
    private Role role;
    private Date dob;
    private String gender;
    private Boolean locked = false;
    private Boolean enabled = false;

    @Override
    public Collection<SimpleGrantedAuthority> getAuthorities() {
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role.getName()));
        return authorities;
    }

    public User() {
    }

    public User(String username, String email, String password, Role role, String gender){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.gender = gender;
    }

    public User(String username, String email, String password, int score, Role role, Date dob, String gender) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
        this.score = score;
        this.role = role;
        this.dob = dob;
        this.gender = gender;
    }

    public User(String id, String username, String email, String password, int score, Role role, Date dob,
                String gender) {
        super();
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.score = score;
        this.role = role;
        this.dob = dob;
        this.gender = gender;
    }

    public void updateScore(int scoreNew){
        this.score = score + scoreNew;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", score=" + score +
                ", role=" + role +
                ", dob=" + dob +
                ", gender='" + gender + '\'' +
                '}';
    }
}
