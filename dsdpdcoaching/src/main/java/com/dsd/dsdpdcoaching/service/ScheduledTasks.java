package com.dsd.dsdpdcoaching.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.dsd.dsdpdcoaching.dao.ActionPlanDao;
import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dto.ActionTaskDataForEmail;
import com.dsd.dsdpdcoaching.dto.Rubric;
import com.dsd.dsdpdcoaching.dto.TeacherInteractionForDailyReport;

@Component
public class ScheduledTasks {
	
	@Autowired
	private TeacherDao teacherDao;
	@Autowired
	private RubricDao rubricDao;
	@Autowired
	private EmailService emailService;
	@Autowired
	private ActionPlanDao actionPlanDao;

	
	//@Scheduled(cron = "0 03 10 ? * ?")
	public void sendDailyActionPlan() {
	    System.out.println("sendDailyActionPlan Timer has kicked off...");
	    //Do a query to get the ACTION_TASKS created today
	    List<ActionTaskDataForEmail> actionPlanDataForToday = actionPlanDao.getActionPlanDataForToday();
	    
	    for (int i = 0; i < actionPlanDataForToday.size(); i++) {
	        if (i==0) {
	        		List<ActionTaskDataForEmail> actionPlanDataForToday1 = new ArrayList<ActionTaskDataForEmail>();
	        		actionPlanDataForToday1.add(actionPlanDataForToday.get(i));
	        } else {
	        //	if (actionPlanDataForToday.get(i).getSchoolId() == actionPlanDataForToday1.) {
	        }
	    }
	    
	    //Do a query to get the email addresses of the coaches and admin from the above query
		System.out.println("Number of daily sendDailyInteractionReportForAdmin emails to send = "+actionPlanDataForToday.size());
	    
	    //for (int i = 0; i < teacherInteractionForDailyReport.size(); i++) {
	    //		emailService.sendDailyInteractionEmail(teacherInteractionForDailyReport.get(i));
	   // }
	}
	
	
	//@Scheduled(cron = "0 0/49 10 * * *")
	public void sendDailyInteractionReportForAdmin() {
	    System.out.println("sendDailyInteractionReportForAdmin Timer has kicked off...");
	    List<TeacherInteractionForDailyReport> teacherInteractionForDailyReport = teacherDao.getInteractionTeacherListBySchoolForToday();
		System.out.println("Number of daily sendDailyInteractionReportForAdmin emails to send = "+teacherInteractionForDailyReport.size());
	    
	    for (int i = 0; i < teacherInteractionForDailyReport.size(); i++) {
	    		emailService.sendDailyInteractionEmail(teacherInteractionForDailyReport.get(i));
	    }
	}
 
 
	 //Send emails to teachers that had RUBRICS taken for them today
	 //@Scheduled(cron = "0 0/53 9 * * *")
	 public void sendDailyRubricReportForTeachers() {
	   System.out.println("sendDailyRubricReportForTeachers Timer has kicked off...");
	   List<Rubric> teacherRubricsForDailyReport = rubricDao.getRubricForToday();
	   System.out.println("Number of daily sendDailyRubricReportForTeachers emails to send = "+teacherRubricsForDailyReport.size());
	   
	   for (int i = 0; i < teacherRubricsForDailyReport.size(); i++) {
		   String teacherEmailAddress = teacherDao.getTeacherEmailAddressForRubric(teacherRubricsForDailyReport.get(i).getTeacherId());
		   emailService.sendRubricEmail(teacherRubricsForDailyReport.get(i), teacherEmailAddress);
	   }
	 }

}
