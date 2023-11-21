package com.leonardofalango.model;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data // Substitui os getters e setters
@AllArgsConstructor // Construtor com todas as propriedades
@Document("user")
public class UserModel implements UserDetails {
    @Id
    private String id;
    private String name;
    private Date dob;
    private String password;
    private String email;
    private String number;
    private Address addres;
    private Server server;
    
    public UserModel() {    }

    @Data
    public class Address {
        private String neighboor;
        private String country;
        private String street;
        private String number;
        private String complement;
        private String cep;
    }

    @Data
    public class Server {
        private String serverAddress;
        private String serverName;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
