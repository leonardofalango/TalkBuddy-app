package com.leonardofalango.model;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Message {
    @Id
    private String id;
    private String senderId;
    private String message;
}