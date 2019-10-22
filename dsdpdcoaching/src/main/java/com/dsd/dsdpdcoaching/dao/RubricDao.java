package com.dsd.dsdpdcoaching.dao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TemporalType;
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
	    return entityManager.createQuery("from RUBRIC where id = :rubricId", Rubric.class)
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
		    						+ " FROM RUBRIC R1 "
		    						+ " WHERE schoolId = ?"
		    						+ " AND EXISTS (Select null "
		    						+ " FROM RUBRIC R2 "
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
				+ " FROM RUBRIC R1 "
				+ " WHERE EXISTS (Select null "
				+ " FROM RUBRIC R2 "
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
			+ " FROM RUBRIC R1 "
			+ " WHERE schoolId in (SELECT schoolid FROM USER_SCHOOL WHERE userid = ?)"
			+ " AND EXISTS (Select null "
			+ " FROM RUBRIC R2 "
			+ " WHERE R2.schoolId = R1.schoolId "
			+ " and R2.teacherId = R1.teacherId "
			+ " GROUP BY schoolId, teacherId "
			+ " HAVING R1.date = max(R2.date)) " ;	

		Query query = entityManager.createNativeQuery(sql, PhaseValues.class);
		query.setParameter(1, userid);
		PhaseValues phaseValues = (PhaseValues) query.getSingleResult();
		return phaseValues;
		}

	//Called by the JSONRequestController to select the rubric dates by school to display on the schoolRubricReport.html triggered from dropdown school list
	@SuppressWarnings("unchecked")
	public List<Date> getRubricDatesBySchool(Integer schoolId) {
		return (List<Date>) entityManager.createQuery("select distinct date from RUBRIC where schoolid = :schoolId and observed = 'Observed Classroom' order by date desc")
    			.setParameter("schoolId", schoolId)
    			.getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Rubric> getRubricDatesAndId(Integer schoolId, Integer teacherId) {
		//LOGGER.debug("Retrieving rubric dates for rubric report for teacher id =  " + teacherId);
		return entityManager.createQuery(
				"from RUBRIC where schoolid = :schoolId and teacherid = :teacherId")
				.setParameter("schoolId", schoolId)
    				.setParameter("teacherId", teacherId)
    			.getResultList();
	}

	//Called by the JSONRequestController to select the rubric 'observed' column values for the dropdown on the schoolRubricReport.html
	@SuppressWarnings("unchecked")
	public List<String> getRubricObservedValuesBySchoolAndDate(Integer schoolId, String date) {
		SimpleDateFormat formatter1=new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = null;
		try {
			date1=formatter1.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		} 

		 return (List<String>) entityManager.createQuery("select observed from RUBRIC where schoolid = :schoolId and date = :date")
    			.setParameter("schoolId", schoolId)
    			.setParameter("date", date1, TemporalType.DATE)
    			.getResultList();
	}

	//Called by the JSONRequestController to get the rubic data to create the graph on the schoolRubricReport.html
	@SuppressWarnings("unchecked")
	public List<Rubric> getRubricValuesBySchoolDateObserved(Integer schoolId, String date) {
		SimpleDateFormat formatter1=new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = null;
		try {
			date1=formatter1.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		} 
		return (List<Rubric>) entityManager.createQuery("from RUBRIC where schoolid = :schoolId and date = :date and observed = 'Observed Classroom'")
	    			.setParameter("schoolId", schoolId)
	    			.setParameter("date", date1, TemporalType.DATE)
	    			.getResultList();
	}

	public Object sendRubricEmail() {
		// TODO Auto-generated method stub
		return null;
	}

	public Rubric getTeacherProgressionReportData(Integer sid, Integer tid) {

		
		String sql = "SELECT R.ID, R.LEVELUP, R.DATE, R.OBSERVED, R.QUESTIONS, R.RUBRICNOTES, R.SCHOOLID, R.TEACHERID, R.TIMEOBSERVED, " +
				" R.USERID, R.PLANNING, R.ASSESSMENTANDDATA, R.PATH, R.PLACE, R.PACE, R.CLASSROOMMANAGEMENT, R.TEACHERROLE, " +
				" R.STUDENTENGAGEMENT, R.STUDENTCOLLABORATION, R.TECHNOLOGY " +
				" FROM RUBRIC R " +
				" WHERE R.SCHOOLID = ?" + 
				" AND R.TEACHERID = ?" + 
				" AND R.OBSERVED = 'Observed Classroom'" + 
				" AND R.DATE = (SELECT MIN(DATE) FROM RUBRIC R2 WHERE R2.SCHOOLID = ? AND R2.TEACHERID = ? AND R2.OBSERVED = 'Observed Classroom')" +
				" GROUP BY ID, DATE, PLANNING, ASSESSMENTANDDATA, PATH, PLACE, PACE, CLASSROOMMANAGEMENT, TEACHERROLE, STUDENTENGAGEMENT, STUDENTCOLLABORATION, TECHNOLOGY";

		Query query = entityManager.createNativeQuery(sql, Rubric.class);
		query.setParameter(1, sid);
		query.setParameter(2, tid);
		query.setParameter(3, sid);
		query.setParameter(4, tid);
		//TeacherProgressionReportData results = (TeacherProgressionReportData) query.getResultList();
		//TeacherProgressionReportData teacherProgressionReportData = (TeacherProgressionReportData) query.getSingleResult();
	
		Rubric rubric = (Rubric) query.getSingleResult();
		return rubric;
		
		
	}
}
