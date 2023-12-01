package com.leonardofalango.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardofalango.DTO.Responses.Response;
import com.leonardofalango.DTO.Responses.TokenResponse;
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
    public TokenResponse login(@RequestBody UserModel user) throws AuthException {
        String pass = DigestUtils.md5DigestAsHex(user.getPassword().getBytes()).toUpperCase();

        final
        List<UserModel> resp = this.userService.findByEmail(user.getEmail());
        if (resp.size() > 0) {
            if (resp.get(0).getPassword().equals(pass)) {
                return authService.createToken(resp.get(0));
            }
            return new TokenResponse(null, null, 401);
        }
        return new TokenResponse(null, null, 404);
    }

    @PostMapping("/validate")
    public Response validate(@RequestHeader("Authorization") String token) {
        try{
            final var validate = this.authService.validateToken(token.replace("Bearer ", ""));
            if (!validate.getData().isBlank()) {
                return new Response("token valid");
            }
            return new Response("token not valid", 401);
        } catch (Exception e) {
            return new Response("token not valid", 401);
        }

    }

}
