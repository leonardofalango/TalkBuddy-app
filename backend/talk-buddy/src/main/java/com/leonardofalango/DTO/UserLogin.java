package com.leonardofalango.DTO;

import lombok.Data;

@Data
public class UserLogin {
    String email;
    String password;

    public UserLogin() {
        
    }
}
