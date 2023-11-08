package com.leonardofalango.talkbuddy.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data // Substitui os getters e setters
@AllArgsConstructor // Construtor com todas as propriedades
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private Date dob;
    private String password;
    private String email;
    private String number;
    private Address addres;
    private Server server;
    
    public UserModel() {    }

    @Data
    public class Address {
        private String neighboor;
        private String country;
        private String street;
        private String number;
        private String complement;
        private String cep;
    }

    @Data
    public class Server {
        private String serverAddress;
        private String serverName;
    }
}
