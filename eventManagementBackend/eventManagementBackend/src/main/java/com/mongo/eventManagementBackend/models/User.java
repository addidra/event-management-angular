package com.mongo.eventManagementBackend.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class User {
    private int id;
    private String username;
    private String fullName;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }


    public User(String fullName, int id, String password, String username) {
        this.fullName = fullName;
        this.id = id;
        this.password = password;
        this.username = username;
    }


}
