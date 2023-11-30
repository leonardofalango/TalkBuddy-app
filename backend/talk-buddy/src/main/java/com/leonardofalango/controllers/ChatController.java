package com.leonardofalango.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardofalango.model.Chat.Chat;
import com.leonardofalango.model.Chat.CreateChat;
import com.leonardofalango.services.ChatService;

// createChat
// getUserChat
// findChat

@RestController
@RequestMapping("/chats")
public class ChatController {
    @Autowired
    private ChatService chatService;

    @PostMapping("/createChat")
    public Chat createChat(@RequestBody CreateChat chat) {
        System.out.println("createChat");

        return chatService.createChat(
            chat.getUserId1(),
            chat.getUserId2()
        );
    }

    @GetMapping("/{userId}")
    public List<Chat> getUserChat(@PathVariable String userId) {
        System.out.println("getUserChat");

        return chatService.getUserChat(userId);
    }

    @GetMapping("/find/{userId1}/{userId2}")
    public Chat findChat(@PathVariable String userId1, @PathVariable String userId2) {
        System.out.println("findChat");

        return chatService.findChat(userId1, userId2);
    }
}