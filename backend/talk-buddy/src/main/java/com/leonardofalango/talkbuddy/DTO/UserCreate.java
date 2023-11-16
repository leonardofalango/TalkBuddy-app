package com.leonardofalango.talkbuddy.DTO;

import lombok.Data;

@Data
public class UserCreate {
    private String id;
    private String name;
    private String password;
    private String email;
    private String number;
}
