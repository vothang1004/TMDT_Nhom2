package com.tmdt.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection= "User")
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private int score;
    private int role;
    private Date dob;
    private String gender;



    public User() {
    }

    public User(String username, String email, String password, int score, int role, Date dob, String gender) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
        this.score = score;
        this.role = role;
        this.dob = dob;
        this.gender = gender;
    }

    public User(String id, String username, String email, String password, int score, int role, Date dob,
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

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void updateScore(int scoreNew){
        this.score = score + scoreNew;
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
