package com.leonardofalango.talkbuddy.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.leonardofalango.talkbuddy.model.UserModel;
import java.util.List;


public interface UserRepository extends MongoRepository<UserModel, String> {
    
    @Query("{'name : ?0'}")
    List<UserModel> findByName(String name);
    
    @Query("{'name' : ?0, 'age' : ?1}")
    List<UserModel> findByNameAndAge(String name, short age);
}
