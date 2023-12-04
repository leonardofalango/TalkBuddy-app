package com.leonardofalango.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.leonardofalango.model.Message.Message;

public interface MessageRepository extends MongoRepository<Message, String>{

    @Query("{'chatId' : ?0 }")
    List<Message> findByChatId(String chatId);
    // Create a new message
}
