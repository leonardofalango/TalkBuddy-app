package com.leonardofalango.services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import com.leonardofalango.DTO.UserCreate;
import com.leonardofalango.DTO.UserLogin;
import com.leonardofalango.model.UserModel;
import com.leonardofalango.model.UserModel.Server;
import com.leonardofalango.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private MessageDigest md;
    
    public UserService() throws NoSuchAlgorithmException {
        this.md = MessageDigest.getInstance("MD5");
    }

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

    public UserModel login(UserLogin user) {
        UserModel userFound = this.userRepository.findByEmail(user.getEmail());

        String pass = DigestUtils.md5DigestAsHex(user.getPassword().getBytes()).toUpperCase();
        
        if (!userFound.getPassword().equals(pass))
            return null;
        
        System.out.println(userFound);
        
        return userFound;
    }

    public UserModel create(UserCreate user) {
        UserModel userModel = new UserModel();
        userModel.setEmail(user.getEmail());
        userModel.setName(user.getName());

        

        userModel.setPassword(
            DigestUtils
                .md5DigestAsHex(user.getPassword().getBytes()).toUpperCase()
        );

        userModel.setNumber(user.getNumber());
        
        return this.userRepository.save(userModel);
    }

    public UserModel getByEmailOrName(String emailOrName) {
        return this.userRepository.findByEmail(emailOrName);
    }

}
