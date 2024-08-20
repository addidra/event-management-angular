package com.mongo.eventManagementBackend.controller;

import com.mongo.eventManagementBackend.models.User;
import com.mongo.eventManagementBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/")
    public ResponseEntity<?> addUser(@RequestBody User user)
    {
        User save = this.userRepository.save(user);
        return ResponseEntity.ok(save);
    }

    @GetMapping("/")
    public ResponseEntity<?> getUser()
    {
        return ResponseEntity.ok(this.userRepository.findAll());
    }

}
