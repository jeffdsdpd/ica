package com.dsd.dsdpdcoaching.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.HokeIntervention;

@Repository
@Transactional
public class InterventionDao {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	//Called by the JSONRequestController to save Hoke County Intervention Data
	public void saveInterventionData(HokeIntervention data) {
		entityManager.persist(data);		
	}
}
