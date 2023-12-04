package com.leonardofalango.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardofalango.model.Message.Message;
import com.leonardofalango.repository.MessageRepository;

@Service
public class MessageService {
    // Create a new Message
    // Get all messages from a chat

    @Autowired
    private MessageRepository messageRepository;

    public Message createMessage(String senderId, String chatId, String text) {
        System.out.println("createMessage");

        Message message = new Message(senderId, text, chatId);
        return messageRepository.save(message);
    }

    public List<Message> getMessages(String chatId) {
        return messageRepository.findByChatId(chatId);
    }
}
