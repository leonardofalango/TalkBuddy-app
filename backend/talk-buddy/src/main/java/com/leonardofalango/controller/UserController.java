package com.leonardofalango.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.leonardofalango.model.UserModel;
import com.leonardofalango.services.UserService;
import com.leonardofalango.DTO.UserCreate;
import com.leonardofalango.DTO.UserDTO;
import com.leonardofalango.DTO.UserLogin;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping({"/", ""})
    public List<UserModel> getAll() {
        System.out.println("getAll");
        return userService.findAll();
    } 

    @PostMapping("/getRandomUserByServer")
    public UserModel getRandomUserByServer(@RequestBody UserDTO user) {
        System.out.println("getRandomUserByServer");
        return new UserModel();
    }

    @PostMapping("/login")
    public UserModel login(@RequestBody UserLogin user) {
        System.out.println("login");
        return userService.login(user);
    }

    @PostMapping("/register")
    public UserModel create(@RequestBody UserCreate user) {
        System.out.println("register");
        return userService.create(user);
    }
}
