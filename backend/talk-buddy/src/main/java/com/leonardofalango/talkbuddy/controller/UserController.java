package com.leonardofalango.talkbuddy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardofalango.talkbuddy.DTO.UserCreate;
import com.leonardofalango.talkbuddy.DTO.UserDTO;
import com.leonardofalango.talkbuddy.DTO.UserLogin;
import com.leonardofalango.talkbuddy.model.UserModel;
import com.leonardofalango.talkbuddy.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping({"/", ""})
    public List<UserModel> getAll() {
        return userService.findAll();
    } 

    @PostMapping("/getRandomUserByServer")
    public UserModel getRandomUserByServer(@RequestBody UserDTO user) {
        return new UserModel();
    }

    @PostMapping("/login")
    public UserModel login(@RequestBody UserLogin user) {
        return userService.login(user);
    }

    @PostMapping("/create")
    public UserModel create(@RequestBody UserCreate user) {
        return userService.create(user);
    }
}
