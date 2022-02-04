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
import com.dsd.dsdpdcoaching.dao.NinjaLevelTrainingDao;
import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dao.UserDao;
import com.dsd.dsdpdcoaching.dto.ActionPlanData;
import com.dsd.dsdpdcoaching.dto.CoachingData;
import com.dsd.dsdpdcoaching.dto.NinjaLevelTeachingData;
import com.dsd.dsdpdcoaching.dto.NinjaLevelUpStrategy;
import com.dsd.dsdpdcoaching.dto.NinjaReportData;
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
	private NinjaLevelTrainingDao ninjaLevelTrainingDao;
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
	
	//Called from ninjareport.js
	@GetMapping(value="/getNinjaFormDatesByTeacherID")
	@ResponseBody
	public List<NinjaLevelTeachingData> getNinjaFormDatesByTeacherID(@RequestParam Integer schoolId, @RequestParam Integer teacherId) {	
		List<NinjaLevelTeachingData> ninjaData =  ninjaLevelTrainingDao.getNinjaFormDatesByTeacherID(schoolId, teacherId);
		return ninjaData;
	}
	
	//Called from ninjareport.js
	@GetMapping(value="/getNinjaTrainingRecordById")
	@ResponseBody
	public NinjaReportData getNinjaTrainingRecordById(@RequestParam Integer recordId) {
		NinjaReportData nlrd = new NinjaReportData();
		NinjaLevelUpStrategy nlus = new NinjaLevelUpStrategy();
		
		NinjaLevelTeachingData ninjaData =  ninjaLevelTrainingDao.getNinjaTrainingRecordById(recordId);
		
		nlrd.setUserId(ninjaData.getUserId());
			
		//SMALLGROUP
		if (ninjaData.getSmallgroupwhite() != null && ninjaData.getSmallgroupwhite().equals("yes")) {
			if (ninjaData.getSmallgroupyellow() != null && ninjaData.getSmallgroupyellow().equals("yes")) {
				if (ninjaData.getSmallgrouporange() != null && ninjaData.getSmallgrouporange().equals("yes")) {
					if (ninjaData.getSmallgroupgreen() != null && ninjaData.getSmallgroupgreen().equals("yes")) {
						if (ninjaData.getSmallgroupblue() != null && ninjaData.getSmallgroupblue().equals("yes")) {
							if (ninjaData.getSmallgrouppurple() != null && ninjaData.getSmallgrouppurple().equals("yes")) {
								nlrd.setSmallGroupLevelUp("Complete");
								nlrd.setSmallGroupColor("purple");
							} else {
								nlrd.setSmallGroupLevelUp(nlus.smallGroupPurple);
								nlrd.setSmallGroupColor("blue");
							}
						} else {
							nlrd.setSmallGroupLevelUp(nlus.smallGroupBlue);
							nlrd.setSmallGroupColor("green");
						}
					} else {
						nlrd.setSmallGroupLevelUp(nlus.smallGroupGreen);
						nlrd.setSmallGroupColor("orange");
					}
				} else {
					nlrd.setSmallGroupLevelUp(nlus.smallGroupOrange);
					nlrd.setSmallGroupColor("yellow");
				}
			} else {
				nlrd.setSmallGroupLevelUp(nlus.smallGroupYellow);
				nlrd.setSmallGroupColor("white");
			}
		} else {
			nlrd.setSmallGroupLevelUp(nlus.smallGroupWhite);
			nlrd.setSmallGroupColor("NA");
		}
		
		//CHECKLIST
		if (ninjaData.getChecklistwhite() != null && ninjaData.getChecklistwhite().equals("yes")) {
			if (ninjaData.getChecklistyellow() != null && ninjaData.getChecklistyellow().equals("yes")) {
				if (ninjaData.getChecklistorange() != null && ninjaData.getChecklistorange().equals("yes")) {
					if (ninjaData.getChecklistgreen() != null && ninjaData.getChecklistgreen().equals("yes")) {
						if (ninjaData.getChecklistblue() != null && ninjaData.getChecklistblue().equals("yes")) {
							if (ninjaData.getChecklistpurple() != null && ninjaData.getChecklistpurple().equals("yes")) {
								nlrd.setChecklistLevelUp("Complete");
								nlrd.setChecklistColor("purple");
							} else {
								nlrd.setChecklistLevelUp(nlus.checklistPurple);
								nlrd.setChecklistColor("blue");
							}
						} else {
							nlrd.setChecklistLevelUp(nlus.checklistBlue);
							nlrd.setChecklistColor("green");
						}
					} else {
						nlrd.setChecklistLevelUp(nlus.checklistGreen);
						nlrd.setChecklistColor("orange");
					}
				} else {
					nlrd.setChecklistLevelUp(nlus.checklistOrange);
					nlrd.setChecklistColor("yellow");
				}
			} else {
				nlrd.setChecklistLevelUp(nlus.checklistYellow);
				nlrd.setChecklistColor("white");
			}
		} else {
			nlrd.setChecklistLevelUp(nlus.checklistWhite);
			nlrd.setChecklistColor("NA");
		}
		
		//DATA
		if (ninjaData.getDatawhite() != null && ninjaData.getDatawhite().equals("yes")) {
			if (ninjaData.getDatayellow() != null && ninjaData.getDatayellow().equals("yes")) {
				if (ninjaData.getDataorange() != null && ninjaData.getDataorange().equals("yes")) {
					if (ninjaData.getDatagreen() != null && ninjaData.getDatagreen().equals("yes")) {
						if (ninjaData.getDatablue() != null && ninjaData.getDatablue().equals("yes")) {
							if (ninjaData.getDatapurple() != null && ninjaData.getDatapurple().equals("yes")) {
								nlrd.setDataLevelUp("Complete");
								nlrd.setDataColor("purple");
							} else {
								nlrd.setDataLevelUp(nlus.dataPurple);
								nlrd.setDataColor("blue");
							}
						} else {
							nlrd.setDataLevelUp(nlus.dataBlue);
							nlrd.setDataColor("green");
						}
					} else {
						nlrd.setDataLevelUp(nlus.dataGreen);
						nlrd.setDataColor("orange");
					}
				} else {
					nlrd.setDataLevelUp(nlus.dataOrange);
					nlrd.setDataColor("yellow");
				}
			} else {
				nlrd.setDataLevelUp(nlus.dataYellow);
				nlrd.setDataColor("white");
			}
		} else {
			nlrd.setDataLevelUp(nlus.dataWhite);
			nlrd.setDataColor("NA");
		}
		
		//STUDENT CHOICE
		if (ninjaData.getStudentchoicewhite() != null && ninjaData.getStudentchoicewhite().equals("yes")) {
			if (ninjaData.getStudentchoiceyellow() != null && ninjaData.getStudentchoiceyellow().equals("yes")) {
				if (ninjaData.getStudentchoiceorange() != null && ninjaData.getStudentchoiceorange().equals("yes")) {
					if (ninjaData.getStudentchoicegreen() != null && ninjaData.getStudentchoicegreen().equals("yes")) {
						if (ninjaData.getStudentchoiceblue() != null && ninjaData.getStudentchoiceblue().equals("yes")) {
							if (ninjaData.getStudentchoicepurple() != null && ninjaData.getStudentchoicepurple().equals("yes")) {
								nlrd.setDataLevelUp("Complete");
								nlrd.setStudentChoiceColor("purple");
							} else {
								nlrd.setStudentChoiceLevelUp(nlus.studentChoicePurple);
								nlrd.setStudentChoiceColor("blue");
							}
						} else {
							nlrd.setStudentChoiceLevelUp(nlus.studentChoiceBlue);
							nlrd.setStudentChoiceColor("green");
						}
					} else {
						nlrd.setStudentChoiceLevelUp(nlus.studentChoiceGreen);
						nlrd.setStudentChoiceColor("orange");
					}
				} else {
					nlrd.setStudentChoiceLevelUp(nlus.studentChoiceOrange);
					nlrd.setStudentChoiceColor("yellow");
				}
			} else {
				nlrd.setStudentChoiceLevelUp(nlus.studentChoiceYellow);
				nlrd.setStudentChoiceColor("white");
			}
		} else {
			nlrd.setStudentChoiceLevelUp(nlus.studentChoiceWhite);
			nlrd.setStudentChoiceColor("NA");
		}
		
		//INDEPENDENT STUDIO
		if (ninjaData.getIndependentstudiowhite() != null && ninjaData.getIndependentstudiowhite().equals("yes")) {
			if (ninjaData.getIndependentstudioyellow() != null && ninjaData.getIndependentstudioyellow().equals("yes")) {
				if (ninjaData.getIndependentstudioorange() != null && ninjaData.getIndependentstudioorange().equals("yes")) {
					if (ninjaData.getIndependentstudiogreen() != null && ninjaData.getIndependentstudiogreen().equals("yes")) {
						if (ninjaData.getIndependentstudioblue() != null && ninjaData.getIndependentstudioblue().equals("yes")) {
							if (ninjaData.getIndependentstudiopurple() != null && ninjaData.getIndependentstudiopurple().equals("yes")) {
								nlrd.setIndependentStudioLevelUp("Complete");
								nlrd.setIndependentStudioColor("purple");
							} else {
								nlrd.setIndependentStudioLevelUp(nlus.independentStudioPurple);
								nlrd.setIndependentStudioColor("blue");
							}
						} else {
							nlrd.setIndependentStudioLevelUp(nlus.independentStudioBlue);
							nlrd.setIndependentStudioColor("green");
						}
					} else {
						nlrd.setIndependentStudioLevelUp(nlus.independentStudioGreen);
						nlrd.setIndependentStudioColor("orange");
					}
				} else {
					nlrd.setIndependentStudioLevelUp(nlus.independentStudioOrange);
					nlrd.setIndependentStudioColor("yellow");
				}
			} else {
				nlrd.setIndependentStudioLevelUp(nlus.independentStudioYellow);
				nlrd.setIndependentStudioColor("white");
			}
		} else {
			nlrd.setIndependentStudioLevelUp(nlus.independentStudioWhite);
			nlrd.setIndependentStudioColor("NA");
		}
		
		//DIGITAL CONTENT
		if (ninjaData.getDigitalcontentwhite() != null && ninjaData.getDigitalcontentwhite().equals("yes")) {
			if (ninjaData.getDigitalcontentyellow() != null && ninjaData.getDigitalcontentyellow().equals("yes")) {
				if (ninjaData.getDigitalcontentorange() != null && ninjaData.getDigitalcontentorange().equals("yes")) {
					if (ninjaData.getDigitalcontentgreen() != null && ninjaData.getDigitalcontentgreen().equals("yes")) {
						if (ninjaData.getDigitalcontentblue() != null && ninjaData.getDigitalcontentblue().equals("yes")) {
							if (ninjaData.getDigitalcontentpurple() != null && ninjaData.getDigitalcontentpurple().equals("yes")) {
								nlrd.setDigitalContentLevelUp("Complete");
								nlrd.setDigitalContentColor("purple");
							} else {
								nlrd.setDigitalContentLevelUp(nlus.digitalContentPurple);
								nlrd.setDigitalContentColor("blue");
							}
						} else {
							nlrd.setDigitalContentLevelUp(nlus.digitalContentBlue);
							nlrd.setDigitalContentColor("green");
						}
					} else {
						nlrd.setDigitalContentLevelUp(nlus.digitalContentGreen);
						nlrd.setDigitalContentColor("orange");
					}
				} else {
					nlrd.setDigitalContentLevelUp(nlus.digitalContentOrange);
					nlrd.setDigitalContentColor("yellow");
				}
			} else {
				nlrd.setDigitalContentLevelUp(nlus.digitalContentYellow);
				nlrd.setDigitalContentColor("white");
			}
		} else {
			nlrd.setDigitalContentLevelUp(nlus.digitalContentWhite);
			nlrd.setDigitalContentColor("NA");
		}

		return nlrd;
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
	@GetMapping(value="/getRubricValuesBySchoolDatesObserved")
	@ResponseBody
	public List<Rubric> getRubricValuesBySchoolDatesObserved(@RequestParam Integer schoolId, @RequestParam String startDate, @RequestParam String endDate) {	
		return rubricDao.getRubricValuesBySchoolDatesObserved(schoolId, startDate, endDate);
	}
	
	//Called from dashboard.js to get the data for the 3d bar graph
	@GetMapping(value="/getRubricValuesBySchoolForDashboard")
	@ResponseBody
	public List<Rubric> getRubricValuesBySchoolForDashboard(@RequestParam Integer schoolId) {	
		return rubricDao.getRubricValuesBySchoolForDashboard(schoolId);
	}
	
	//Called from dashboard.js to get the data for the 3d bar graph for the schools assigned to the user
	@GetMapping(value="/getRubricValuesForAssignedSchoolsForDashboard")
	//@ResponseBody
	public List<Rubric> getRubricValuesForAssignedSchoolsForDashboard(@RequestParam Integer schoolId) {	
		return rubricDao.getRubricValuesForAssignedSchoolsForDashboard(schoolId);
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
	
	//Called from dashboard.js
	@GetMapping(value="/getDashboardRubricValuesForAllSchools")
	@ResponseBody
	public List<Rubric> getDashboardRubricValuesForAllSchools(HttpServletRequest request) {	
		User user = new User();
		user = userDao.getUserByUsername(request.getUserPrincipal().getName());
		List<Rubric> lr;
		
		if(request.isUserInRole("admin")) {
			lr =  rubricDao.getDashboardRubricValuesForAllSchools();
		} else {
			lr =  rubricDao.getDashboardRubricValuesForRequiredSchools(user.getId().toString());
		}
		return lr;
	}
	
	//Called from dashboard.js
	@GetMapping(value="/getDashboardRubricValuesBySchool")
	@ResponseBody
	public List<Rubric> getDashboardRubricValuesBySchool(@RequestParam Integer schoolId) {	
		List<Rubric> lr =  rubricDao.getDashboardRubricValuesBySchool(schoolId);
		return lr;
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
