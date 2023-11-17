package com.leonardofalango.DTO;

import lombok.Data;

@Data
public class UserDTO {
    private String token;
    private String _id;

    public UserDTO() {   }
}
