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
	//private static final Logger LOGGER = LoggerFactory.getLogger(CoachingDataDao.class);
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<CoachingData> getCoachingData() {
		//LOGGER.debug("Retrieving all coaching data");
	    return entityManager.createQuery("from coaching_interactions", CoachingData.class)
	            .getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<Integer, Date>> getCoachingDatesBySchoolAndTeacher(Integer schoolId, Integer teacherId) {
		//LOGGER.debug("Retrieving coaching dates for school id " + schoolId + " and teacher id " + teacherId);
	    return (List<Map<Integer, Date>>)entityManager
	    		.createQuery("select new map(ci.id as id, ci.entryDate as entryDate) from coaching_interactions ci where schoolid = :schoolid and teacherid = :teacherid order by entryDate desc")
    			.setParameter("schoolid", schoolId)
    			.setParameter("teacherid", teacherId)
    			.getResultList();
	}
	
	public CoachingData getCoachingDataById(Integer id) {
		//LOGGER.debug("Retrieving coaching data for id " + id);
	    return entityManager.createQuery("from coaching_interactions where id = :id", CoachingData.class)
    			.setParameter("id", id)
    			.getSingleResult();
	}
	
	public void saveCoachingData(CoachingData coachingData) {
		//LOGGER.debug("Saving coaching data");
		entityManager.persist(coachingData);		
	}
}
