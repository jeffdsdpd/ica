package com.dsd.dsdpdcoaching.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.ActionPlanData;
import com.dsd.dsdpdcoaching.dto.ActionTaskData;

@Repository
@Transactional
public class ActionPlanDao {
	
	@PersistenceContext
	private EntityManager entityManager;
	@Autowired
	ActionPlanData actionPlanData;
	
	public void saveActionPlanData(ActionPlanData actionPlanData) {
		entityManager.persist(actionPlanData);
	}
	
	public List<ActionPlanData> getActionPlanBySchoolGradeSubject(Integer actionid, String gradestring, String subjectstring) {
		
		String sql = "SELECT * from ACTION A, ACTION_TASKS AT WHERE A.id = AT.actionid AND schoolid = ? AND grade = ? AND subject = ?";
		
		Query query = entityManager.createNativeQuery(sql);
		query.setParameter(1, actionid);
		query.setParameter(2, gradestring);
		query.setParameter(3, subjectstring);
		
		List<Object[]> results = query.getResultList();
		List<ActionPlanData> actionPlanList = new ArrayList<ActionPlanData>();
		
		results.stream().forEach((record) -> {
			ActionPlanData apd = new ActionPlanData();
			ActionTaskData atd = new ActionTaskData();
			
			Integer id = ((Integer) record[0]);
			Integer schoolId = ((Integer) record[1]);
			String grade = (String) record[2];
			String subject = (String) record[3];
			String owner = (String) record[4];
			Date date = (Date) record[5];
			Integer taskid = ((Integer) record[6]);
			Integer taskactionid = ((Integer) record[7]);
			String task = (String) record[8];
			String completed = (String) record[9];
			
			atd.setTaskid(taskid);
			atd.setTask(task);
			atd.setCompleted(completed);
			
			apd.setId(id);
			apd.setSchoolId(schoolId);
			apd.setGrade(grade);
			apd.setSubject(subject);
			apd.setActionTaskDataRecord(atd);
			apd.setOwner(owner);
			apd.setEntrydate(date);
			
			actionPlanList.add(apd);
			
		});
		
		return actionPlanList;
		
		//if (results.isEmpty()) return null;
		//else return (ActionPlanData) results.get(0);

	}

}
