package com.dsd.dsdpdcoaching.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;

import com.dsd.dsdpdcoaching.dto.HTMLCoachingEmail;
import com.dsd.dsdpdcoaching.dto.HTMLDailyInteractionEmail;
import com.dsd.dsdpdcoaching.dto.HTMLRubricEmail;
import com.dsd.dsdpdcoaching.dto.HTMLRubricEmailFromForm;
import com.dsd.dsdpdcoaching.dto.Rubric;
import com.dsd.dsdpdcoaching.dto.RubricLevelUp;
import com.dsd.dsdpdcoaching.dto.TeacherInteractionForDailyReport;

@Configuration
public class EmailService {
	
	public void sendRubricEmail(HttpServletRequest request, HttpServletResponse response) {
		HTMLRubricEmail emailString = new HTMLRubricEmail();
		String phase = null;
		List<String> levelUpItemsToEmail = new ArrayList<String>();

		//Get the school id passed via ajax from the coachingReport.jsp
		String date = request.getParameter("date");
		String schoolId = request.getParameter("schoolId");
		String teacherId = request.getParameter("teacherId");
		String teacherEmail = request.getParameter("teacherEmail");
		String adminEmail = request.getParameter("adminEmail");
		String planning = request.getParameter("planning");
		String assessanddata = request.getParameter("assessanddata");
		String path = request.getParameter("path");
		String place = request.getParameter("place");
		String pace = request.getParameter("pace");
		String classmgmt = request.getParameter("classmgmt");
		String teacherrole = request.getParameter("teacherrole");
		String studentengage = request.getParameter("studentengage");
		String studentcollab = request.getParameter("studentcollab");
		String technology = request.getParameter("technology");
		String rubricnotes = request.getParameter("rubricnotes");
		//String levelupLines[]=(request.getParameter("levelup").split("\n"));
		String levelup = (request.getParameter("levelup").replace("\n", "<br />"));
		String questions = request.getParameter("questions");
		String rubricTotalForPhase = request.getParameter("rubricTotal");
		
		if (Integer.parseInt(rubricTotalForPhase) <= 10) {
			phase = "1";
		} else if (Integer.parseInt(rubricTotalForPhase) <= 20) {
			phase = "2";
		} else phase = "3";
		
		//Check which three of the levelup suggestions we need to email out
		if (!checkIfNull(request.getParameter("planningLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("planningLevelData"));
		}
		if (!checkIfNull(request.getParameter("assessLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("assessLevelData"));
		}
		if (!checkIfNull(request.getParameter("pathLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("pathLevelData"));
		}
		if (!checkIfNull(request.getParameter("placeLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("placeLevelData"));
		}
		if (!checkIfNull(request.getParameter("paceLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("paceLevelData"));
		}
		if (!checkIfNull(request.getParameter("classmgmtLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("classmgmtLevelData"));
		}
		if (!checkIfNull(request.getParameter("teachroleLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("teachroleLevelData"));
		}
		if (!checkIfNull(request.getParameter("stengageLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("stengageLevelData"));
		}
		if (!checkIfNull(request.getParameter("stcollabLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("stcollabLevelData"));
		}
		if (!checkIfNull(request.getParameter("technologyLevelData"))) {
			levelUpItemsToEmail.add(request.getParameter("technologyLevelData"));
		}
		
		final String username = "dsdpdemail";
		final String password = "GgsjDF3984i()";
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "mail.smtp2go.com");
		props.put("mail.smtp.port", "587"); // 2525, 8025 and 25 can also be used.
 
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });
		
		if (teacherEmail.equalsIgnoreCase("not selected")) {
			teacherEmail = "";
		}
		if (adminEmail.equalsIgnoreCase("not selected")) {
			adminEmail = "";
		}
		
		try { 
			Message message = new MimeMessage(session);
			Multipart mp = new MimeMultipart("alternative");
			BodyPart textmessage = new MimeBodyPart();
			textmessage.setText("It is a text message \n");
			BodyPart htmlmessage = new MimeBodyPart();

			htmlmessage.setContent(emailString.getHtmlString(teacherId, schoolId, date, planning, assessanddata, path, place, pace, classmgmt, teacherrole, studentengage, studentcollab, technology, rubricnotes, levelup, questions, levelUpItemsToEmail, phase), "text/html");	
			
			mp.addBodyPart(textmessage);
			mp.addBodyPart(htmlmessage);
			message.setFrom(new InternetAddress("DSDPD@DSDPDCoaching.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(teacherEmail +","+ adminEmail));
			//message.setRecipients(Message.RecipientType.BCC, InternetAddress.parse("jeff@dsdpdcoaching.com"));
			message.setSubject("Instructional Coaching Application - Rubric Report For: "+teacherId);
			message.setContent(mp); 
			Transport.send(message);
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
		
	}
	
	
	//Send a RUBRIC email by sending in a RUBRIC object
	public void sendRubricEmail(Rubric rubric, String teacherEmail) {
		HTMLRubricEmailFromForm emailString = new HTMLRubricEmailFromForm();
		String phase = null;
		List<String> levelUpItemsToEmail = new ArrayList<String>();

		//Get the school id passed via ajax from the coachingReport.jsp
		String date = rubric.getDate().toString();
		String schoolId = rubric.getSchoolId().toString();
		String teacherId = rubric.getTeacherId().toString();
		String planning = rubric.getPlanning();
		String assessanddata = rubric.getAssessmentAndData();
		String path = rubric.getPath();
		String place = rubric.getPlace();
		String pace = rubric.getPace();
		String classmgmt = rubric.getClassroommgmt();
		String teacherrole = rubric.getTeacherrole();
		String studentengage = rubric.getStudentegmt();
		String studentcollab = rubric.getStudentcolab();
		String technology = rubric.getTechnology();
		String rubricnotes = rubric.getRubricNotes();
		String levelup = "";
		//= (request.getParameter("levelup").replace("\n", "<br />"));
		List<RubricLevelUp> rubricLevelUps = rubric.getLevelupList();
		for(int i=0;i<rubricLevelUps.size();i++) {
			levelup+=rubricLevelUps.get(i).getLevelup()+"<br />";
		}
		
		String questions = rubric.getQuestions();
		String rubricTotal = (Integer.toString(rubric.getRubricScore()));
		
		if (Integer.parseInt(rubricTotal) <= 10) {
			phase = "1";
		} else if (Integer.parseInt(rubricTotal) <= 20) {
			phase = "2";
		} else phase = "3";
		
		final String username = "dsdpdemail";
		final String password = "GgsjDF3984i()";
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "mail.smtp2go.com");
		props.put("mail.smtp.port", "587"); // 2525, 8025 and 25 can also be used.
 
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });
		
		try { 
			Message message = new MimeMessage(session);
			Multipart mp = new MimeMultipart("alternative");
			BodyPart textmessage = new MimeBodyPart();
			textmessage.setText("It is a text message \n");
			BodyPart htmlmessage = new MimeBodyPart();

			htmlmessage.setContent(emailString.getHtmlString(teacherId, schoolId, date, planning, assessanddata, path, place, pace, classmgmt, teacherrole, studentengage, studentcollab, technology, rubricnotes, levelup, questions, levelUpItemsToEmail, phase), "text/html");	
			
			mp.addBodyPart(textmessage);
			mp.addBodyPart(htmlmessage);
			message.setFrom(new InternetAddress("DSDPD@DSDPDCoaching.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(teacherEmail));
			//message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("jeffwk@yahoo.com"));
			//message.setRecipients(Message.RecipientType.BCC, InternetAddress.parse("jeff@dsdpdcoaching.com"));
			message.setSubject("Instructional Coaching Application - Rubric Report For: "+teacherId);
			message.setContent(mp); 
			Transport.send(message);
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
		
	}
	
	

	//called from jsonrequestcontroller triggered from Coaching Report - Email report
	public void sendCoachingReportEmail(HttpServletRequest request, HttpServletResponse response) {
		HTMLCoachingEmail emailString = new HTMLCoachingEmail();

		//Get the school id passed via ajax from the coachingReport.jsp
		String date = request.getParameter("date");
		String schoolId = request.getParameter("schoolId");
		String teacherId = request.getParameter("teacherId");
		String lessonTitle = request.getParameter("lessonTitle");
		String teacherEmail = request.getParameter("teacherEmail");
		String adminEmail = request.getParameter("adminEmail");
		String notes = request.getParameter("notes");
		String strategies = request.getParameter("strategies");
		String steps = request.getParameter("steps");
		String tools = request.getParameter("tools");
		
		final String username = "dsdpdemail";
		final String password = "GgsjDF3984i()";
		//final String password = "Flight00!";
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "mail.smtp2go.com");
		props.put("mail.smtp.port", "587"); // 2525, 8025 and 25 can also be used.
 
		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });
		
		if (teacherEmail.equalsIgnoreCase("not selected")) {
			teacherEmail = "";
		}
		if (adminEmail.equalsIgnoreCase("not selected")) {
			adminEmail = "";
		}
		
		try { 
			Message message = new MimeMessage(session);
			Multipart mp = new MimeMultipart("alternative");
			BodyPart textmessage = new MimeBodyPart();
			textmessage.setText("It is a text message \n");
			BodyPart htmlmessage = new MimeBodyPart();

			htmlmessage.setContent(emailString.getHtmlString(teacherId, schoolId, date, lessonTitle, notes, strategies, steps, tools), "text/html");
			
			mp.addBodyPart(textmessage);
			mp.addBodyPart(htmlmessage);
			message.setFrom(new InternetAddress("DSDPD@DSDPDCoaching.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(teacherEmail +","+ adminEmail));
			//message.setRecipients(Message.RecipientType.BCC, InternetAddress.parse("jeff@dsdpdcoaching.com"));
			message.setSubject("Instructional Coaching Application - Coaching Report For: "+teacherId);
			message.setContent(mp); 
			Transport.send(message);
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
		
	}
	
	boolean checkIfNull(String rubricItem) {
		if (rubricItem.length() == 0 || rubricItem.contains("not initialized")) {
			return true;
		}
		return false;
	}
	
	

	public void sendDailyInteractionEmail(TeacherInteractionForDailyReport teacherInteractionForDailyReport) {
		HTMLDailyInteractionEmail emailString = new HTMLDailyInteractionEmail();
		
		String teacherName = teacherInteractionForDailyReport.getName();
		String teacherEmail = teacherInteractionForDailyReport.getTeacherEmail();
		String date = teacherInteractionForDailyReport.getDate();
		String interactionMethod = teacherInteractionForDailyReport.getInteractionMethod();
		String userid = teacherInteractionForDailyReport.getUserid();
		int rubricScore = teacherInteractionForDailyReport.getRubricscore();
		
				final String username = "dsdpdemail";
				final String password = "GgsjDF3984i()";
				
				Properties props = new Properties();
				props.put("mail.smtp.auth", "true");
				props.put("mail.smtp.starttls.enable", "true");
				props.put("mail.smtp.host", "mail.smtp2go.com");
				props.put("mail.smtp.port", "587"); // 2525, 8025 and 25 can also be used.
				
				Session session = Session.getInstance(props, new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(username, password);
					}
				  });
		
		try { 
			Message message = new MimeMessage(session);
			Multipart mp = new MimeMultipart("alternative");
			BodyPart textmessage = new MimeBodyPart();
			textmessage.setText("It is a text message \n");
			BodyPart htmlmessage = new MimeBodyPart();

			htmlmessage.setContent(emailString.getHtmlString(teacherName, teacherEmail, date, interactionMethod, userid, rubricScore), "text/html");
			
			mp.addBodyPart(textmessage);
			mp.addBodyPart(htmlmessage);
			message.setFrom(new InternetAddress("DSDPD@DSDPDCoaching.com"));
			//message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(teacherEmail));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("jeffwk@yahoo.com"));
			//message.setRecipients(Message.RecipientType.BCC, InternetAddress.parse("jeff@dsdpdcoaching.com"));
			message.setSubject("Instructional Coaching Application - Interaction Report For: "+teacherName);
			message.setContent(mp); 
			Transport.send(message);
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
		
				
				
	}

}
