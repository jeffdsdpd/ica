package com.dsd.dsdpdcoaching.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.PhaseValues;
import com.dsd.dsdpdcoaching.dto.Rubric;

@Repository
@Transactional
public class RubricDao {
	
	@PersistenceContext
	private EntityManager entityManager;

	//Called by the JSONRequestController to save rubric data on rubricForm.html
	public void saveRubricData(Rubric data) {
		entityManager.persist(data);		
	}

	//Called by the JSONRequestController to select the rubric to display on the rubricReport.html
	public Rubric getRubricById(Integer rubricId) {
	    return entityManager.createQuery("from rubric where id = :rubricId", Rubric.class)
    			.setParameter("rubricId", rubricId)
    			.getSingleResult();
	}

	//Called by the JSONRequestController to select the rubric data to display on the dashboard.html triggered from dropdown school list
	public PhaseValues getDashboardPhaseValuesBySchool(Integer schoolId) {
		String sql =  "SELECT 1 as id, SUM(CASE WHEN planning like 'Rotation%' THEN 1 ELSE 0 END + "
		    						+ " CASE WHEN assessmentanddata like 'Collects%' THEN 1 else 0 END + "
		    						+ " CASE WHEN path like 'Same%' THEN 1 else 0 END + "
		    						+ " CASE WHEN place like 'Move%' THEN 1 else 0 END + "
		    						+ " CASE WHEN pace like 'Timer%' THEN 1 else 0 END + "
		    						+ " CASE WHEN classroommanagement like 'Restating%' THEN 1 else 0 END + "
		    						+ " CASE WHEN teacherrole like '%facilitator%' THEN 1 else 0 END + "
		    						+ " CASE WHEN studentengagement like 'Follow%' THEN 1 else 0 END + "
		    						+ " CASE WHEN studentcollaboration like 'Collects%' THEN 1 else 0 END + "
		    						+ " CASE WHEN technology like 'Technology%' THEN 1 else 0 END) AS phase1, "
		    						+ " SUM(CASE WHEN planning like 'No time%' THEN 1 ELSE 0 END + "
		    						+ " CASE WHEN assessmentanddata like 'Using%' THEN 1 else 0 END + "
		    						+ " CASE WHEN path like 'Variety%' THEN 1 else 0 END + "
		    						+ " CASE WHEN place like 'Flexible%' THEN 1 else 0 END + "
		    						+ " CASE WHEN pace like 'Move%' THEN 1 else 0 END + "
		    						+ " CASE WHEN classroommanagement like 'Self%' THEN 1 else 0 END + "
		    						+ " CASE WHEN teacherrole like '%student%' THEN 1 else 0 END + "
		    						+ " CASE WHEN studentengagement like 'Engaging%' THEN 1 else 0 END + "
		    						+ " CASE WHEN studentcollaboration like 'Flexible%' THEN 1 else 0 END + "
		    						+ " CASE WHEN technology like 'Using%' THEN 1 else 0 END) AS phase2, "
		    						+ " SUM(CASE WHEN planning like 'Using%' THEN 1 ELSE 0 END + "
		    						+ " CASE WHEN assessmentanddata like 'Pre%' THEN 1 else 0 END + "
		    						+ " CASE WHEN path like 'Individual%' THEN 1 else 0 END + "
		    						+ " CASE WHEN place like 'Pick%' THEN 1 else 0 END + "
		    						+ " CASE WHEN pace like 'Learning%' THEN 1 else 0 END + "
		    						+ " CASE WHEN classroommanagement like 'Automatic%' THEN 1 else 0 END + "
		    						+ " CASE WHEN teacherrole like '%99%' THEN 1 else 0 END + "
		    						+ " CASE WHEN studentengagement like 'Deeply%' THEN 1 else 0 END + "
		    						+ " CASE WHEN studentcollaboration like 'PBL%' THEN 1 else 0 END + "
		    						+ " CASE WHEN technology like 'Projects%' THEN 1 else 0 END) AS phase3 "
		    						+ " FROM rubric R1 "
		    						+ " WHERE schoolId = ?"
		    						+ " AND EXISTS (Select null "
		    						+ " FROM rubric R2 "
		    						+ " WHERE R2.schoolId = R1.schoolId "
		    						+ " and R2.teacherId = R1.teacherId "
		    						+ " GROUP BY schoolId, teacherId "
		    						+ " HAVING R1.date = max(R2.date))";
		
		Query query = entityManager.createNativeQuery(sql, PhaseValues.class);
		query.setParameter(1, schoolId);
		PhaseValues phaseValues = (PhaseValues) query.getSingleResult();
		return phaseValues;
	}

	//Called by the JSONRequestController to select the rubric data for initial display for ALL schools on the dashboard.html - when 'admin' logged in
	public PhaseValues getDashboardPhaseValuesForAllSchools() {
		String sql =  "SELECT 1 as id, SUM(CASE WHEN planning like 'Rotation%' THEN 1 ELSE 0 END + "
				+ " CASE WHEN assessmentanddata like 'Collects%' THEN 1 else 0 END + "
				+ " CASE WHEN path like 'Same%' THEN 1 else 0 END + "
				+ " CASE WHEN place like 'Move%' THEN 1 else 0 END + "
				+ " CASE WHEN pace like 'Timer%' THEN 1 else 0 END + "
				+ " CASE WHEN classroommanagement like 'Restating%' THEN 1 else 0 END + "
				+ " CASE WHEN teacherrole like '%facilitator%' THEN 1 else 0 END + "
				+ " CASE WHEN studentengagement like 'Follow%' THEN 1 else 0 END + "
				+ " CASE WHEN studentcollaboration like 'Collects%' THEN 1 else 0 END + "
				+ " CASE WHEN technology like 'Technology%' THEN 1 else 0 END) AS phase1, "
				+ " SUM(CASE WHEN planning like 'No time%' THEN 1 ELSE 0 END + "
				+ " CASE WHEN assessmentanddata like 'Using%' THEN 1 else 0 END + "
				+ " CASE WHEN path like 'Variety%' THEN 1 else 0 END + "
				+ " CASE WHEN place like 'Flexible%' THEN 1 else 0 END + "
				+ " CASE WHEN pace like 'Move%' THEN 1 else 0 END + "
				+ " CASE WHEN classroommanagement like 'Self%' THEN 1 else 0 END + "
				+ " CASE WHEN teacherrole like '%student%' THEN 1 else 0 END + "
				+ " CASE WHEN studentengagement like 'Engaging%' THEN 1 else 0 END + "
				+ " CASE WHEN studentcollaboration like 'Flexible%' THEN 1 else 0 END + "
				+ " CASE WHEN technology like 'Using%' THEN 1 else 0 END) AS phase2, "
				+ " SUM(CASE WHEN planning like 'Using%' THEN 1 ELSE 0 END + "
				+ " CASE WHEN assessmentanddata like 'Pre%' THEN 1 else 0 END + "
				+ " CASE WHEN path like 'Individual%' THEN 1 else 0 END + "
				+ " CASE WHEN place like 'Pick%' THEN 1 else 0 END + "
				+ " CASE WHEN pace like 'Learning%' THEN 1 else 0 END + "
				+ " CASE WHEN classroommanagement like 'Automatic%' THEN 1 else 0 END + "
				+ " CASE WHEN teacherrole like '%99%' THEN 1 else 0 END + "
				+ " CASE WHEN studentengagement like 'Deeply%' THEN 1 else 0 END + "
				+ " CASE WHEN studentcollaboration like 'PBL%' THEN 1 else 0 END + "
				+ " CASE WHEN technology like 'Projects%' THEN 1 else 0 END) AS phase3 "
				+ " FROM rubric R1 "
				+ " WHERE EXISTS (Select null "
				+ " FROM rubric R2 "
				+ " WHERE R2.schoolId = R1.schoolId "
				+ " and R2.teacherId = R1.teacherId "
				+ " GROUP BY schoolId, teacherId "
				+ " HAVING R1.date = max(R2.date)) " ;

		Query query = entityManager.createNativeQuery(sql, PhaseValues.class);
		PhaseValues phaseValues = (PhaseValues) query.getSingleResult();
		return phaseValues;
}
	
	//Called by the JSONRequestController to select the rubric data to display on the dashboard.html triggered from dropdown school list
	public PhaseValues getDashboardPhaseValuesForRequiredSchools(Integer userid) {
	String sql =  "SELECT 1 as id, SUM(CASE WHEN planning like 'Rotation%' THEN 1 ELSE 0 END + "
			+ " CASE WHEN assessmentanddata like 'Collects%' THEN 1 else 0 END + "
			+ " CASE WHEN path like 'Same%' THEN 1 else 0 END + "
			+ " CASE WHEN place like 'Move%' THEN 1 else 0 END + "
			+ " CASE WHEN pace like 'Timer%' THEN 1 else 0 END + "
			+ " CASE WHEN classroommanagement like 'Restating%' THEN 1 else 0 END + "
			+ " CASE WHEN teacherrole like '%facilitator%' THEN 1 else 0 END + "
			+ " CASE WHEN studentengagement like 'Follow%' THEN 1 else 0 END + "
			+ " CASE WHEN studentcollaboration like 'Collects%' THEN 1 else 0 END + "
			+ " CASE WHEN technology like 'Technology%' THEN 1 else 0 END) AS phase1, "
			+ " SUM(CASE WHEN planning like 'No time%' THEN 1 ELSE 0 END + "
			+ " CASE WHEN assessmentanddata like 'Using%' THEN 1 else 0 END + "
			+ " CASE WHEN path like 'Variety%' THEN 1 else 0 END + "
			+ " CASE WHEN place like 'Flexible%' THEN 1 else 0 END + "
			+ " CASE WHEN pace like 'Move%' THEN 1 else 0 END + "
			+ " CASE WHEN classroommanagement like 'Self%' THEN 1 else 0 END + "
			+ " CASE WHEN teacherrole like '%student%' THEN 1 else 0 END + "
			+ " CASE WHEN studentengagement like 'Engaging%' THEN 1 else 0 END + "
			+ " CASE WHEN studentcollaboration like 'Flexible%' THEN 1 else 0 END + "
			+ " CASE WHEN technology like 'Using%' THEN 1 else 0 END) AS phase2, "
			+ " SUM(CASE WHEN planning like 'Using%' THEN 1 ELSE 0 END + "
			+ " CASE WHEN assessmentanddata like 'Pre%' THEN 1 else 0 END + "
			+ " CASE WHEN path like 'Individual%' THEN 1 else 0 END + "
			+ " CASE WHEN place like 'Pick%' THEN 1 else 0 END + "
			+ " CASE WHEN pace like 'Learning%' THEN 1 else 0 END + "
			+ " CASE WHEN classroommanagement like 'Automatic%' THEN 1 else 0 END + "
			+ " CASE WHEN teacherrole like '%99%' THEN 1 else 0 END + "
			+ " CASE WHEN studentengagement like 'Deeply%' THEN 1 else 0 END + "
			+ " CASE WHEN studentcollaboration like 'PBL%' THEN 1 else 0 END + "
			+ " CASE WHEN technology like 'Projects%' THEN 1 else 0 END) AS phase3 "
			+ " FROM rubric R1 "
			+ " WHERE schoolId in (SELECT schoolid FROM user_school WHERE userid = ?)"
			+ " AND EXISTS (Select null "
			+ " FROM rubric R2 "
			+ " WHERE R2.schoolId = R1.schoolId "
			+ " and R2.teacherId = R1.teacherId "
			+ " GROUP BY schoolId, teacherId "
			+ " HAVING R1.date = max(R2.date)) " ;	

		Query query = entityManager.createNativeQuery(sql, PhaseValues.class);
		query.setParameter(1, userid);
		PhaseValues phaseValues = (PhaseValues) query.getSingleResult();
		return phaseValues;
		}
}
