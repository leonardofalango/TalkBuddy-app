package com.leonardofalango.talkbuddy.services;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardofalango.talkbuddy.model.UserModel;
import com.leonardofalango.talkbuddy.model.UserModel.Server;
import com.leonardofalango.talkbuddy.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public List<UserModel> findByName(String name) {
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public UserModel findById(String id) {
        return this.userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public UserModel delete(String id) {
        UserModel deletedUser;

        deletedUser = this.findById(id);
        this.userRepository.deleteById(id);

        return deletedUser;
    }

    public List<UserModel> getAllUserInServer(Server server) {
        return this.userRepository.findByServer(server);
    }

    public UserModel getRandomUserInServer(Server server) {
        Random rand = new Random();
        
        UserModel randomUser = this
            .userRepository
            .findByServer(server)
            .get(
                rand.nextInt(
                    this.userRepository
                        .findByServer(server)
                        .size()
                )
            );
        
        return randomUser;
    }

}
