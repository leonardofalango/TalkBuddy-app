package com.leonardofalango.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bootstrap.springboot.model.User;
import com.leonardofalango.model.UserModel;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
    private UserService userService;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserModel user = userService.getByEmailOrName(email);
		
		if (user.getEmail().equals(email)) {
			return (UserDetails) user;
		} else {
			throw new UsernameNotFoundException("User not found with email: " + email);
		}
	}
}