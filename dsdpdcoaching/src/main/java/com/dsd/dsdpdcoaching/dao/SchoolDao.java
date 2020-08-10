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
	//private static final Logger LOGGER = LoggerFactory.getLogger(SchoolDao.class);
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<School> getSchools() {
		// LOGGER.debug("Retrieving schools for admin user");
	    return entityManager.createQuery("from SCHOOLS order by name", School.class)
	            .getResultList();
	}

	public List<School> getSchoolsByUser(String username) {
		// LOGGER.debug("Retrieving schools for " + username);
	    return entityManager.createQuery("from USERS where username = :username ORDER BY name", School.class)
	    		.setParameter("username", username)
            .getResultList();
	}
}
