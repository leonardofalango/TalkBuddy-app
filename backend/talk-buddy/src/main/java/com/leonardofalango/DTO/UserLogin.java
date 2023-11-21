package com.leonardofalango.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserLogin {
    String email;
    String password;

    public UserLogin() {
        
    }
}
