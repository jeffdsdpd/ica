package com.dsd.dsdpdcoaching.dao;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.Teacher;

@Repository
@Transactional
public class TeacherDao {
	//private static final Logger LOGGER = LoggerFactory.getLogger(TeacherDao.class);

	@PersistenceContext
	private EntityManager entityManager;

	public List<Teacher> getTeachers() {
		//LOGGER.debug("Retrieving teachers");
	    return entityManager.createQuery(
	    			"from TEACHERS", Teacher.class)
	            .getResultList();
	}
	
	public List<Teacher> getTeachersBySchoolId(Integer id) {
		//LOGGER.debug("Retrieving teachers for school id " + id);
	    return entityManager.createQuery(
	    			"from TEACHERS where schoolid = :id", Teacher.class)
	    			.setParameter("id", id)
	            .getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<String, String>> getEmailAddress(Integer teacherId) {
		//LOGGER.debug("Retrieving emails for coaching report for teacher id =  " + teacherId);
		return (List<Map<String, String>>)entityManager
	    		.createQuery("select new map (emailAddress, adminEmailAddress) from TEACHERS t where id = :teacherid")
    			.setParameter("teacherid", teacherId)
    			.getResultList();
	}

}
