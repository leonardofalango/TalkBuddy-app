package com.leonardofalango.talkbuddy.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardofalango.talkbuddy.model.UserModel;
import com.leonardofalango.talkbuddy.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public UserModel save(String id, String name, short age) {
        return this.userRepository.save(new UserModel(id, name, age));
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

}
