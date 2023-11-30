package com.leonardofalango.model.Message;

import lombok.Data;

@Data
public class CreateMessage {
    private String senderId;
    private String message;

    public CreateMessage(String senderId, String message) {
        this.senderId = senderId;
        this.message = message;
    }

    public CreateMessage() {
    }
}
