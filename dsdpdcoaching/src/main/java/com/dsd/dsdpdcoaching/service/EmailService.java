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
import com.dsd.dsdpdcoaching.dto.HTMLRubricEmail;

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
		String levelup = request.getParameter("levelup");
		String questions = request.getParameter("questions");
		String rubricTotalForPhase = request.getParameter("rubricTotal");
		
		if (Integer.parseInt(rubricTotalForPhase) <= 10) {
			phase = "1";
		} else if (Integer.parseInt(rubricTotalForPhase) <= 20) {
			phase = "2";
		} else phase = "3";
		
		final String username = "dsdpdemail";
		final String password = "Flight70";
		
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
		final String password = "Flight70";
		
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

}
