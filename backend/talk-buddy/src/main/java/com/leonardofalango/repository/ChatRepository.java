package com.leonardofalango.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.leonardofalango.model.Chat.Chat;

import java.util.List;


public interface ChatRepository extends MongoRepository<Chat, String> {
    
    @Query("{'usersId' : ?0}")
    List<Chat> findUserChats(String userId);

    @Query("{$all: ['usersId1' : ?0, 'usersId2' : ?1}]")
    Chat findChatWithMembers(String userId1, String userId2);

    @Query("{$in: ['usersId1' : ?0, 'usersId2' : ?1]}")
    Chat findChatByMembers(String userId1, String userId2);
    
}
