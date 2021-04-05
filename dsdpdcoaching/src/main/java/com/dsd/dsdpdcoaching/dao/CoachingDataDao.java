package com.dsd.dsdpdcoaching.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.CoachingData;

@Repository
@Transactional
public class CoachingDataDao {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<CoachingData> getCoachingData() {
	    return entityManager.createQuery("from COACHING_INTERACTIONS", CoachingData.class)
	            .getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<Integer, Date>> getCoachingDatesBySchoolAndTeacher(Integer schoolId, Integer teacherId) {
	    return (List<Map<Integer, Date>>)entityManager
	    		.createQuery("select new map(ci.id as id, ci.entryDate as entryDate) from COACHING_INTERACTIONS ci where schoolid = :schoolid and teacherid = :teacherid order by entryDate desc")
    			.setParameter("schoolid", schoolId)
    			.setParameter("teacherid", teacherId)
    			.getResultList();
	}
	
	public CoachingData getCoachingDataById(Integer id) {
	    return entityManager.createQuery("from COACHING_INTERACTIONS where id = :id", CoachingData.class)
    			.setParameter("id", id)
    			.getSingleResult();
	}
	
	public void saveCoachingData(CoachingData coachingData) {
		entityManager.persist(coachingData);		
	}

}
