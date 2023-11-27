package com.leonardofalango.model.Chat;

import java.util.*;

import org.springframework.data.annotation.Id;

import lombok.Data; 

@Data
public class Chat {
    @Id
    private String id;
    private String[] usersId;
    private Date lastMessageTimestamp;

    public Chat(String[] usersId) {
        this.usersId = usersId;
        this.lastMessageTimestamp = new Date();
    }

    public Chat() {
    }
}
