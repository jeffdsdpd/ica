package com.dsd.dsdpdcoaching.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.School;

@Repository
@Transactional
public class SchoolDao {
	private static final Logger LOGGER = LoggerFactory.getLogger(SchoolDao.class);
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<School> getSchools() {
		LOGGER.debug("Retrieving schools for admin user");
	    return entityManager.createQuery("from schools", School.class)
	            .getResultList();
	}

	public List<School> getSchoolsByUser(String username) {
		LOGGER.debug("Retrieving schools for " + username);
		// select * from schools where id in (select schoolid from user_school where userid in (select id from users where username='mlynch'));
	    return entityManager.createQuery("from USERS where username = :username", School.class)
	    		.setParameter("username", username)
            .getResultList();
	}
}
