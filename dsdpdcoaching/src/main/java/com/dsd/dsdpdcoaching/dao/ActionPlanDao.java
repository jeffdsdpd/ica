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
	
	public List<ActionPlanData> getActionPlanBySchoolGradeSubject(Integer schoolid, String gradestring, String subjectstring) {
		
		String sql = "SELECT * from ACTION A, ACTION_TASKS AT WHERE A.id = AT.actionid AND schoolid = ? AND grade = ? AND subject = ?";
		String everythingSql = "SELECT * from ACTION A, ACTION_TASKS AT WHERE A.id = AT.actionid AND schoolid = ?";
		Query query;
		
		if (subjectstring.equalsIgnoreCase("Everything")) {
			query = entityManager.createNativeQuery(everythingSql);
			query.setParameter(1, schoolid);
		}else {
			query = entityManager.createNativeQuery(sql);
			query.setParameter(1, schoolid);
			query.setParameter(2, gradestring);
			query.setParameter(3, subjectstring);
		}
		
		
		
		List<Object[]> results = query.getResultList();
		
		List<ActionPlanData> actionPlanList = new ArrayList<ActionPlanData>();
		
		//loop through the results - there could be multiple records with same school, grade, subject
		results.stream().forEach((record) -> {
			ActionPlanData apd = new ActionPlanData();
			ActionTaskData atd = new ActionTaskData();
			List<ActionTaskData> taskList = new ArrayList<ActionTaskData>();

			//set the results to the objects
			atd.setTaskid((Integer) record[6]);
			atd.setTask((String) record[8]);
			atd.setCompleted((String) record[9]);
			taskList.add(atd);
			
			apd.setId((Integer) record[0]);
			apd.setSchoolId((Integer) record[1]);
			apd.setGrade((String) record[2]);
			apd.setSubject((String) record[3]);
			apd.setTaskList(taskList);
			apd.setOwner((String) record[4]);
			apd.setEntrydate((Date) record[5]);
			
			actionPlanList.add(apd);
			
		});
		return actionPlanList;
	}

	
	public void updateActionPlanTasks(String[] checked, String[] unchecked) {
		
		String sql = "Update ACTION_TASKS set completed = ? where actionid = ? AND taskid = ?";
		Query query = entityManager.createNativeQuery(sql);
		
		if (!checked[0].isEmpty()) {
			for( int i = 0; i < checked.length; i++) {
				String recordstring = checked[i];
				String[] splitrecordstring = recordstring.split(" ");
					query.setParameter(1, "true");
					query.setParameter(2, splitrecordstring[0]);
					query.setParameter(3, splitrecordstring[1]);
					query.executeUpdate();
			}
		}
		
		if (!unchecked[0].isEmpty()) {
			for( int i = 0; i < unchecked.length; i++) {
				String recordstring = unchecked[i];
				String[] splitrecordstring = recordstring.split(" ");
					query.setParameter(1, "false");
					query.setParameter(2, splitrecordstring[0]);
					query.setParameter(3, splitrecordstring[1]);
					query.executeUpdate();
			}
		}
	}
}
