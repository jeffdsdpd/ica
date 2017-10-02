package com.dsd.dsdpdcoaching.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.dsd.dsdpdcoaching.dao.UserDao;
import com.dsd.dsdpdcoaching.dto.User;
import com.dsd.dsdpdcoaching.dto.UserRole;

@Configuration
public class LoginService implements UserDetailsService {

	@Autowired
	private UserDao userDao;

	@Override
	public UserDetails loadUserByUsername(String username) {
		User user = userDao.getUserByUsername(username);
		if(user == null) {
			throw new UsernameNotFoundException("User not found!");
		} else {
			List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
			for(UserRole userRole : user.getUserRoles()) {
				grantedAuthorities.add(new SimpleGrantedAuthority(userRole.getRole()));
			}
			return new org.springframework.security.core.userdetails.User(username, user.getPassword(), grantedAuthorities);
		}
	}

}
