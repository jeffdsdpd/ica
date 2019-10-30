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
		
		int count = actionPlanData.getTask().size();
		
		for(int i=0;i<count;i++) {
			//String currentTask = actionPlanData.getTasks()[i];
			//actionPlanData.setTask(currentTask);
			entityManager.persist(actionPlanData);
		}
	}

}
