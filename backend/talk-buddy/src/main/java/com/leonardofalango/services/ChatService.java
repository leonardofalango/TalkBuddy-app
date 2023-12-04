package com.leonardofalango.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardofalango.model.Chat.Chat;
import com.leonardofalango.repository.ChatRepository;

@Service
public class ChatService {
    @Autowired
    private ChatRepository chatRepository;

    public Chat createChat(String userId1, String userId2) {
        System.out.println("createChat");
        
        Chat chatInDb = chatRepository.findChatWithMembers(userId1, userId2);
        
        if (chatInDb != null) {
            System.out.println("Chat: ");
            System.out.println(chatInDb.getId());
            return chatInDb;
        }
        
        System.out.println("Creating Chat: ");
        Chat chat = new Chat(new String[] { userId1, userId2 });
        return chatRepository.save(chat);
    }

    public List<Chat> getUserChat(String userId) {
        System.out.println("getUserChat");

        return chatRepository.findUserChats(userId);
    }

    public Chat findChat(String userId, String userId1) {
        System.out.println("findChat");

        return chatRepository.findChatByMembers(userId, userId1);
    }
}
