package com.dsd.dsdpdcoaching.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dsd.dsdpdcoaching.dao.CoachingDataDao;
import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dao.UserDao;
import com.dsd.dsdpdcoaching.dto.CoachingData;
import com.dsd.dsdpdcoaching.dto.PhaseValues;
import com.dsd.dsdpdcoaching.dto.Rubric;
import com.dsd.dsdpdcoaching.dto.Teacher;
import com.dsd.dsdpdcoaching.dto.User;


@RestController
public class JSONRequestController {
	
	@Autowired
	private TeacherDao teacherDao;
	@Autowired
	private CoachingDataDao coachingDataDao;
	@Autowired
	private RubricDao rubricDao;
	@Autowired
	private UserDao userDao;

	//Called from coachingForm.js, coachingReport.js,rubricForm.js, and rubricReport.js
	@GetMapping(value="/getTeachersBySchool")
	@ResponseBody
	public List<Teacher> getTeachersBySchool(@RequestParam Integer schoolId) {
		return teacherDao.getTeachersBySchoolId(schoolId);
	}
	
	//Called from coachingReport.js
	@GetMapping(value="/getCoachingDatesBySchoolAndTeacher")
	@ResponseBody
	public List<Map<Integer, Date>> getCoachingDatesBySchoolAndTeacher(@RequestParam Integer schoolId, @RequestParam Integer teacherId) {
		return coachingDataDao.getCoachingDatesBySchoolAndTeacher(schoolId, teacherId);
	}

	//Called from coachingReport.js
	@GetMapping(value="/getCoachingDataById")
	@ResponseBody
	public CoachingData getCoachingReportById(@RequestParam Integer id) {
		return coachingDataDao.getCoachingDataById(id);
	}
	
	//Called from coachingReport.js and rubricReport.js
	@GetMapping(value="/getEmailAddress")
	@ResponseBody
	public List<Map<String, String>> getEmailAddress(@RequestParam Integer teacherId) {	
		return teacherDao.getEmailAddress(teacherId);
	}
	
	//Called from rubricReport.js
	@GetMapping(value="/getRubricDatesAndId")
	@ResponseBody
	public List<Rubric> getRubricDatesAndId(@RequestParam Integer schoolId, @RequestParam Integer teacherId) {	
		return teacherDao.getRubricDatesAndId(schoolId, teacherId);
	}
	
	//Called from rubricReport.js
	@GetMapping(value="/getRubricById")
	@ResponseBody
	public Rubric getRubricById(@RequestParam Integer recordId) {	
		return rubricDao.getRubricById(recordId);
	}
	
	//Called from schoolRubricReport.js
	@GetMapping(value="/getRubricDatesBySchool")
	@ResponseBody
	public List<Date> getRubricDatesBySchool(@RequestParam Integer schoolId) {	
		return rubricDao.getRubricDatesBySchool(schoolId);
	}
	
	//Called from schoolRubricReport.js
	@GetMapping(value="/getRubricObservedValuesBySchoolAndDate")
	@ResponseBody
	public List<String> getRubricObservedValuesBySchoolAndDate(@RequestParam Integer schoolId, @RequestParam String date) {	
		return rubricDao.getRubricObservedValuesBySchoolAndDate(schoolId, date);
	}
	
	//Called from initial load of dashboard page via dashboard.js
	@GetMapping(value = "/getDashboardPhaseValuesForRequiredSchools")
	@ResponseBody
	public PhaseValues getDashboardPhaseValuesForRequiredSchools(HttpServletRequest request) {
		User user = new User();
		user = userDao.getUserByUsername(request.getUserPrincipal().getName());
		PhaseValues pv = null;
		
		if(request.isUserInRole("admin")) {
			pv =  rubricDao.getDashboardPhaseValuesForAllSchools();
		} else {
			pv =  rubricDao.getDashboardPhaseValuesForRequiredSchools(user.getId());
		}

		return pv;
	}

	//Called from dashboard.js
	@GetMapping(value="/getDashboardPhaseValuesBySchool")
	@ResponseBody
	public PhaseValues getDashboardPhaseValuesBySchool(@RequestParam Integer schoolId) {	
		 PhaseValues pv =  rubricDao.getDashboardPhaseValuesBySchool(schoolId);
		 return pv;
	}

}