package com.leonardofalango.services;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.leonardofalango.model.UserModel;

import jakarta.security.auth.message.AuthException;

// import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AuthenticateService implements UserDetailsService {

    @Autowired
    private UserService userService;

    // @Value("${jwt.secret")
    // private String secret;

    public String createToken(UserModel user) throws AuthException {
        try {

            final var anAlgorithm = Algorithm.HMAC256("teste");
            final String aToken = JWT
                    .create()
                    .withSubject(user.getEmail())
                    .withExpiresAt(new Date(new Date(0).getTime() + 24 * 60 * 60 * 1000))
                    .sign(anAlgorithm);
            return aToken;

        } catch (IllegalArgumentException e) {
            throw new AuthException(e.getMessage());
        } catch (Exception e) {
            throw new AuthException(e.getMessage());
        }

    }

    public String validateToken(String token) {
        try {
            final var anAlgorithm = Algorithm.HMAC256("teste");
            final var decoded = JWT
                    .require(anAlgorithm)
                    .build()
                    .verify(token);
            final var anSubject = decoded.getSubject();
            return anSubject;
        } catch (Exception e) {
            return "";
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel resp = this.userService.findByEmail(username);
        if (resp.getEmail().equals(username)) {
            return resp;
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }

}
