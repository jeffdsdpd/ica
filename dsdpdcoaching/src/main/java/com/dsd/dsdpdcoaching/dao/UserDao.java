package com.dsd.dsdpdcoaching.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.User;

@Repository
@Transactional
public class UserDao {
	@PersistenceContext
	private EntityManager entityManager;

	public User getUserByUsername(String username) {
	    return (User) entityManager.createQuery(
	            "from User where username = :username")
	            .setParameter("username", username)
	            .getSingleResult();
	}
	
}
