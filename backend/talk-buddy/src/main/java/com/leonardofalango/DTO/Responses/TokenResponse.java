package com.leonardofalango.DTO.Responses;

import lombok.Data;

@Data
public class TokenResponse {
    String token;
    String userId;
    int status = 200;

    public TokenResponse(String token, String userId) {
        this.token = token;
        this.userId = userId;
    }

    public TokenResponse(String token, String userId, int status) {
        this.token = token;
        this.userId = userId;
        this.status = status;
    }
}