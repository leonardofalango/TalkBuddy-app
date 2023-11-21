package com.leonardofalango.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserCreate {
    private String id;
    private String name;
    private String password;
    private String email;
    private String number;

    public UserCreate() {   }
}
