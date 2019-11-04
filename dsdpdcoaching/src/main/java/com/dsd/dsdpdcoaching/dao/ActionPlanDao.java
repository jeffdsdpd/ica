package com.dsd.dsdpdcoaching.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.ActionPlanData;

@Repository
@Transactional
public class ActionPlanDao {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public void saveActionPlanData(ActionPlanData actionPlanData) {
		entityManager.persist(actionPlanData);

	}
	
	public ActionPlanData getActionPlanDataBySchoolAndGrade(Integer id, String grade) {
	    return entityManager.createQuery("from ACTION where schoolid = :id and grade = :grade", ActionPlanData.class)
    			.setParameter("id", id)
    			.setParameter("grade", grade)
    			.getSingleResult();
	}

}
