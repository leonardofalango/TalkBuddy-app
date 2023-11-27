package com.leonardofalango.model.Chat;

import lombok.Data;

@Data
public class CreateChat {
    private String userId1;
    private String userId2;

    public CreateChat(String userId1, String userId2) {
        this.userId1 = userId1;
        this.userId2 = userId2;
    }

    public CreateChat() {
    }
}
