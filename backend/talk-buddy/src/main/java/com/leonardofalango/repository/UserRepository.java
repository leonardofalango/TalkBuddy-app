package com.leonardofalango.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.leonardofalango.model.UserModel;
import com.leonardofalango.model.UserModel.Server;

import java.util.List;


public interface UserRepository extends MongoRepository<UserModel, String> {
    
    @Query("{'name : ?0'}")
    List<UserModel> findByName(String name);
    
    @Query("{'name' : ?0, 'age' : ?1}")
    List<UserModel> findByNameAndAge(String name, short age);

    @Query("{'server' : ?0 }")
    List<UserModel> findByServer(Server server);

    @Query("{'email' : ?0 }")
    UserModel findByEmail(String email);
}
