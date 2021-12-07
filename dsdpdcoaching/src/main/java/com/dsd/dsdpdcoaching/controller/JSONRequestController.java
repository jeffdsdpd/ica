package com.dsd.dsdpdcoaching.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dsd.dsdpdcoaching.dao.ActionPlanDao;
import com.dsd.dsdpdcoaching.dao.CoachingDataDao;
import com.dsd.dsdpdcoaching.dao.LevelUpDao;
import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dao.UserDao;
import com.dsd.dsdpdcoaching.dto.ActionPlanData;
import com.dsd.dsdpdcoaching.dto.CoachingData;
import com.dsd.dsdpdcoaching.dto.PhaseValues;
import com.dsd.dsdpdcoaching.dto.Rubric;
import com.dsd.dsdpdcoaching.dto.RubricLevelUp;
import com.dsd.dsdpdcoaching.dto.Teacher;
import com.dsd.dsdpdcoaching.dto.TeacherInteraction;
import com.dsd.dsdpdcoaching.dto.TeacherProgressionReportData;
import com.dsd.dsdpdcoaching.dto.User;
import com.dsd.dsdpdcoaching.service.ClassroomQuickstart;
import com.dsd.dsdpdcoaching.service.EmailService;
import com.google.api.services.classroom.model.Course;
import com.google.api.services.classroom.model.CourseWork;

@RestController
public class JSONRequestController extends HttpServlet { 

	private static final long serialVersionUID = 8395780964203382899L;
	
	@Autowired
	private TeacherDao teacherDao;
	@Autowired
	private CoachingDataDao coachingDataDao;
	@Autowired
	private RubricDao rubricDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private LevelUpDao levelUpDao;
	@Autowired
	private EmailService emailService;
	@Autowired
	private ActionPlanDao actionPlanDao;
	@Autowired
	private ClassroomQuickstart classroomQuickstart;

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
	@GetMapping(value="/getRubricDatesIDUserid")
	@ResponseBody
	public List<Rubric> getRubricDatesIDUserid(@RequestParam Integer schoolId, @RequestParam Integer teacherId) {	
		return rubricDao.getRubricDatesIDUserid(schoolId, teacherId);
	}
	
	//Called from rubricReport.js
	@GetMapping(value="/getRubricById")
	@ResponseBody
	public Rubric getRubricById(@RequestParam Integer recordId) {
		Rubric r = new Rubric();
		r = rubricDao.getRubricById(recordId);
		return r;
	}
	
	//Called from schoolRubricReport.js to get all the rubric dates by the school
	@GetMapping(value="/getRubricDatesBySchool")
	@ResponseBody
	public List<Date> getRubricDatesBySchool(@RequestParam Integer schoolId) {	
		return rubricDao.getRubricDatesBySchool(schoolId);
	}
	
	//Called from schoolRubricReport.js to get the data for the graph
	@GetMapping(value="/getRubricValuesBySchoolDateObserved")
	@ResponseBody
	public List<Rubric> getRubricValuesBySchoolDateObserved(@RequestParam Integer schoolId, @RequestParam String date) {	
		return rubricDao.getRubricValuesBySchoolDateObserved(schoolId, date);
	}
	
	//Called from dashboard.js to get the data for the 3d bar graph
	@GetMapping(value="/getRubricValuesBySchoolForDashboard")
	@ResponseBody
	public List<Rubric> getRubricValuesBySchoolForDashboard(@RequestParam Integer schoolId) {	
		return rubricDao.getRubricValuesBySchoolForDashboard(schoolId);
	}
	
	//Called from teacherProgressionReport.js to get the data for the graph
	@GetMapping(value="/getTeacherProgressionReportData")
	@ResponseBody
	public TeacherProgressionReportData getTeacherProgressionReportData(@RequestParam Integer schoolId, @RequestParam Integer teacherId) {	
		return rubricDao.getTeacherProgressionReportData(schoolId, teacherId);
	}
	
	//Called from rubricReport.js to send the rubric report email
	@GetMapping(value="/sendRubricEmail")
	@ResponseBody
	public String sendRubricEmail(HttpServletRequest request, HttpServletResponse response) {
		emailService.sendRubricEmail(request, response);
		return "success";
	}
	
	//Called from coachingReport.js to send the coaching report email
	@GetMapping(value="/sendCoachingEmail")
	@ResponseBody
	public String sendCoachingEmail(HttpServletRequest request, HttpServletResponse response) {
		emailService.sendCoachingReportEmail(request, response);
		return "success";
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
		 if (pv.getPhase1() == null) {
			 pv.setPhase1(0);
		 }
		 if (pv.getPhase2() == null) {
			 pv.setPhase2(0);
		 }
		 if (pv.getPhase3() == null) {
			 pv.setPhase3(0);
		 }
		 return pv;
	}
	
	//Called from rubricReport.js to get the appropriate levelup data to display
	@GetMapping(value="/getLevelUpData")
	@ResponseBody
	public String[][] getLevelUpData(HttpServletRequest request, HttpServletResponse response) {	
		return levelUpDao.getLevelUpData(request, response);
	}
	
	//Called from actionPlanReport.js
	@GetMapping(value="/getActionPlanBySchoolGradeSubject")
	@ResponseBody
	public List<ActionPlanData> getActionPlanBySchoolGradeSubject(@RequestParam Integer schoolId, @RequestParam String grade, @RequestParam String subject) {	
		List<ActionPlanData> apd = actionPlanDao.getActionPlanBySchoolGradeSubject(schoolId, grade, subject);
		return apd;
	}
	
	//Called from interactionReport.js
	@GetMapping(value="/getInteractionTeacherListBySchool")
	@ResponseBody
	public List<TeacherInteraction> getInteractionTeacherListBySchool(@RequestParam String schoolId) {
		return teacherDao.getInteractionTeacherListBySchool(schoolId);
	}
	
	//Called from interactionReport.js
	@GetMapping(value="/getInteractionDataByTypeAndId")
	@ResponseBody
	public String getInteractionDataByTypeAndId(@RequestParam String interaction, @RequestParam String id) {
		String result = null;
		if (interaction.equalsIgnoreCase("Rubric")) {
			Rubric rubric = rubricDao.getRubricById(Integer.parseInt(id));
			result = "Rubric Notes: " + rubric.getRubricNotes() + "Rubric Questions: " + rubric.getQuestions()  + "LevelUp List: " + rubric.getLevelupList().toString();
		} else {
			CoachingData coachingData = coachingDataDao.getCoachingDataById(Integer.parseInt(id));
			result = "Coaching Notes: " + coachingData.getNotes() + "Coaching Strategies: " + coachingData.getStrategies()  + 
					"Coaching Next Steps: " + coachingData.getGoals() + "Coaching Tools: " + coachingData.getTools();
		}
		return result;
	}
	
	//Called from rubricForm.js
	@GetMapping(value="/getLevelUpsByTeacher")
	@ResponseBody
	public List<RubricLevelUp> getLevelUpsByTeacher(@RequestParam String teacherId) {
		return rubricDao.getLevelUpsByTeacher(teacherId);
		//return teacherDao.getInteractionTeacherListBySchool(teacherId);
	}
	
	//Called from classroomChecklist.js
	@GetMapping(value="/getTeacherChecklist")
	@ResponseBody
	public List<Course> getTeacherChecklist(@RequestParam Integer schoolId, @RequestParam Integer teacherId) {
		
		List<Course> coursesList = new ArrayList<Course>();
		
		try {
			coursesList =  classroomQuickstart.getCourses(schoolId, teacherId);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (GeneralSecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return coursesList;
	}
	
	//Called from classroomChecklist.js
	@GetMapping(value="/getCoursework")
	@ResponseBody
	public List<CourseWork> getCourseWork(@RequestParam String courseId, @RequestParam Integer teacherId) {

		List<CourseWork> courseWorkList = new ArrayList<CourseWork>();
		
		try {
			return classroomQuickstart.getCourseWork(courseId, teacherId);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (GeneralSecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return courseWorkList;

	}
	

}
