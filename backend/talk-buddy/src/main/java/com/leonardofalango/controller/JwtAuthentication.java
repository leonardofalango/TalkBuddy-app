package com.leonardofalango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardofalango.model.UserModel;
import com.leonardofalango.services.AuthenticateService;
import com.leonardofalango.services.UserService;

import jakarta.security.auth.message.AuthException;

@RestController
@RequestMapping("/auth")
public class JwtAuthentication {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticateService authService;

    @PostMapping("/login")
    public String login(@RequestBody UserModel user) throws AuthException {
        UserModel resp = this.userService.findByEmail(user.getEmail());
        if (resp != null) {
            if (resp.getPassword().equals(user.getPassword())) {
                return authService.createToken(user);
            }
            return "Senha incorreta";
        }
        return "Usuário não encontrado";
    }

    @PostMapping("/validate")
    public String validate(@RequestHeader("Authorization") String token) {
        final var validate = this.authService.validateToken(token.replace("Bearer ", ""));
        if (!validate.isBlank()) {
            return validate;
        }
        return "token not valid";
    }

}
