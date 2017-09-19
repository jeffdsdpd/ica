package com.dsd.dsdpdcoaching.service;

import org.springframework.context.annotation.Configuration;

@Configuration
public class LoginService {

	public boolean validateUser(String name, String password) {
		System.out.println("In LoginService with name = " + name);
		return false;
	}

}
