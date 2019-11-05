package com.dsd.dsdpdcoaching.dao;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
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
	
	public ActionPlanData getActionPlanBySchoolGradeSubject(Integer id, String grade, String subject) {
		
		String sql = "SELECT * from ACTION where schoolid = ? and grade = ? and subject = ? LIMIT 0,1";
		
		Query query = entityManager.createNativeQuery(sql, ActionPlanData.class);
		query.setParameter(1, id);
		query.setParameter(2, grade);
		query.setParameter(3, subject);
		
		List results = query.getResultList();

		if (results.isEmpty()) return null;
		else if (results.size() == 1) {
			return (ActionPlanData) results.get(0);
		}
		return null;
	}

}
