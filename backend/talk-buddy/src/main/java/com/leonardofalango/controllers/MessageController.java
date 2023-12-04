package com.leonardofalango.controllers;

import java.util.List;

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
    public List<Message> getMessages(@PathVariable String chatId) {
        var m = messageService.getMessages(chatId);

        // System.out.println("------------------------------");
        // for (Message message : m) {
        //     System.out.println(message.getMessage());
        // }
        // System.out.println("------------------------------");

        return m;
    }

    @PostMapping("/{chatId}")
    public Message createMessage(@PathVariable String chatId, @RequestBody CreateMessage msg) {
        return messageService.createMessage(msg.getSenderId(), chatId, msg.getMessage());
    }
}
