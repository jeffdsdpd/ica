package com.dsd.dsdpdcoaching.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dao.TeacherDao;
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
