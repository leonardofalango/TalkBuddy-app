package com.leonardofalango.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardofalango.model.Message.CreateMessage;
import com.leonardofalango.model.Message.Message;
import com.leonardofalango.services.MessageService;

@RestController
@RequestMapping("/msg")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping("/{chatId}")
    public Iterable<Message> getMessages(@PathVariable String chatId) {
        return messageService.getMessages(chatId);
    }

    @PostMapping("/{chatId}")
    public Message createMessage(@PathVariable String chatId, @RequestBody CreateMessage msg) {
        return messageService.createMessage(msg.getSenderId(), chatId, msg.getMessage());
    }
}
