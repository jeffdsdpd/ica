package com.dsd.dsdpdcoaching.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.CoachingData;

@Repository
@Transactional
public class CoachingDataDao {
	private static final Logger LOGGER = LoggerFactory.getLogger(CoachingDataDao.class);
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<CoachingData> getCoachingData() {
		LOGGER.debug("Retrieving all coaching data");
	    return entityManager.createQuery("from coaching_interactions", CoachingData.class)
	            .getResultList();
	}
	
	public void saveCoachingData(CoachingData coachingData) {
		LOGGER.debug("Saving coaching data");
		entityManager.persist(coachingData);		
	}
}
