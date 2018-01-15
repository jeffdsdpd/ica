package com.dsd.dsdpdcoaching.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.Teacher;

@Repository
@Transactional
public class TeacherDao {
	private static final Logger LOGGER = LoggerFactory.getLogger(TeacherDao.class);

	@PersistenceContext
	private EntityManager entityManager;

	public List<Teacher> getTeachers() {
		LOGGER.debug("Retrieving teachers");
	    return entityManager.createQuery(
	    			"from teachers", Teacher.class)
	            .getResultList();
	}
	
	public List<Teacher> getTeachersBySchoolId(Integer id) {
		LOGGER.debug("Retrieving teachers for school id " + id);
	    return entityManager.createQuery(
	    			"from teachers where schoolid = :id", Teacher.class)
	    			.setParameter("id", id)
	            .getResultList();
	}

}
