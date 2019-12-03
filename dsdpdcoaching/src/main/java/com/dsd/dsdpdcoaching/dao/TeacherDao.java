package com.dsd.dsdpdcoaching.dao;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.Teacher;

@Repository
@Transactional
public class TeacherDao {

	@PersistenceContext
	private EntityManager entityManager;

	public List<Teacher> getTeachers() {
	    return entityManager.createQuery(
	    			"from TEACHERS", Teacher.class)
	            .getResultList();
	}
	
	public List<Teacher> getTeachersBySchoolId(Integer id) {
	    return entityManager.createQuery(
	    			"from TEACHERS where schoolid = :id", Teacher.class)
	    			.setParameter("id", id)
	            .getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<String, String>> getEmailAddress(Integer teacherId) {
		return (List<Map<String, String>>)entityManager
	    		.createQuery("select new map (emailAddress, adminEmailAddress) from TEACHERS t where id = :teacherid")
    			.setParameter("teacherid", teacherId)
    			.getResultList();
	}

	public void insertTeachers(int schoolId, String[] names, String[] emails, String[] subjects, String[] grades) {
		int count = names.length;
		String sql = "INSERT INTO TEACHERS (SCHOOLID, NAME, EMAILADDRESS, SUBJECT, GRADE) VALUES (?, ?, ?, ?, ?)";
		
		for(int i=0;i<count;i++) {
			Query query = entityManager.createNativeQuery(sql);
			
			query.setParameter(1, schoolId);
			query.setParameter(2, names[i]);
			query.setParameter(3, emails[i]);
			query.setParameter(4, subjects[i]);
			query.setParameter(5, grades[i]);
			
			query.executeUpdate();
		}
	}

	public void removeTeachers(int teacherId) {
		String sql = "DELETE from TEACHERS where id = ?";
		Query query = entityManager.createNativeQuery(sql);
		
		query.setParameter(1, teacherId);
		
		query.executeUpdate();
	}

}
