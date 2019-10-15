package com.dsd.dsdpdcoaching.dao;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class LoginDao {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public void insertLogin() {
		String username;
		DateFormat sdf = new SimpleDateFormat("MM/dd/yyyy HH:mm");
		Calendar cal = Calendar.getInstance();
		
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		username = ((UserDetails)principal).getUsername();
		
		    entityManager.createNativeQuery("INSERT INTO LOGIN (user_id, datetime) VALUES (?, STR_TO_DATE(?,'%m/%d/%Y %H:%i'))")
		      .setParameter(1, username)
		      .setParameter(2, sdf.format(cal.getTime()))
		      .executeUpdate();
	}
}
