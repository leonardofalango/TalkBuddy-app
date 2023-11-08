package com.leonardofalango.talkbuddy.model;

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
    
    private short age;

    public UserModel(String name, short age) {
        this.age = age;
        this.name = name;
    }
    

    public UserModel(String id) {
        this.id = id;
    }

}
