package com.leonardofalango.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.leonardofalango.DTO.Responses.Response;
import com.leonardofalango.DTO.Responses.TokenResponse;
import com.leonardofalango.model.UserModel;

import jakarta.security.auth.message.AuthException;

@Service
public class AuthenticateService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Value("${jwt.secret")
    private String secret;

    public TokenResponse createToken(UserModel user) throws AuthException {
        try {

            final var anAlgorithm = Algorithm.HMAC256(secret);
            final String aToken = JWT
                    .create()
                    .withSubject(user.getEmail())
                    .withExpiresAt(new Date(new Date().getTime() + 24 * 60 * 60 * 1000))
                    .sign(anAlgorithm);
            return new TokenResponse(aToken, user.getId());

        } catch (IllegalArgumentException e) {
            throw new AuthException(e.getMessage());
        } catch (Exception e) {
            throw new AuthException(e.getMessage());
        }

    }

    public Response validateToken(String token) {
        System.out.println("token: " + token);

        final var anAlgorithm = Algorithm.HMAC256(secret);
        final var decoded = JWT
                .require(anAlgorithm)
                .build()
                .verify(token);
        final var anSubject = decoded.getSubject();
        return new Response(anSubject);
        
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<UserModel> resp = this.userService.findByEmail(username);
        if(resp.size() > 0){
            if (resp.get(0).getEmail().equals(username)) {
            return resp.get(0);
            } 
        }
        throw new UsernameNotFoundException("User not found");
    }

}
