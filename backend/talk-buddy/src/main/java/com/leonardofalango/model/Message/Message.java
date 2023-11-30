package com.leonardofalango.model.Message;


import java.util.Date;
import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Message {
    @Id
    private String id;
    private String senderId;
    private String chatId;
    private String message;
    private Date timestamp;


    public Message(String senderId, String message, String chatId) {
        this.senderId = senderId;
        this.message = message;
        this.chatId = chatId;
        // get date now
        this.timestamp = new Date();
    }

    public Message() {
        this.timestamp = new Date();
    }

}