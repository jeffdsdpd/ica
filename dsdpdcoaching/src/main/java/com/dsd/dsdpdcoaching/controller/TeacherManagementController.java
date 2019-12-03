package com.dsd.dsdpdcoaching.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dto.Teacher;

@Controller
@SessionAttributes("schoolList")
public class TeacherManagementController {
	
	@Autowired
	private TeacherDao teacherDao;
	
	@GetMapping("/teacherManagementForm.html")
	public String getTeacherManagementForm(Model model, HttpSession session) {
		
		model.addAttribute("teacherData", new Teacher());
		
		return "teacherManagementForm";
	}
	
	@PostMapping("/setTeacherManagementForm")
	public String postCoachingForm(HttpServletRequest request, @ModelAttribute Teacher teacherData) {
		
		String addremove = request.getParameter("addremovefield");
		
		//Add teachers selected from the client
		if (addremove != null && addremove.equals("add")) {
			int schoolId = Integer.parseInt(request.getParameter("schoolId"));
			String[] nameFields = request.getParameterValues("names[]");
			String[] emailFields = request.getParameterValues("emails[]");
			String[] subjects = request.getParameterValues("subject[]");
			String[] grades = request.getParameterValues("grade[]");

			teacherDao.insertTeachers(schoolId, nameFields, emailFields, subjects, grades);
		}
		
		//Remove the single selected teacher from the client
		if (addremove != null && addremove.equals("remove")) {
			int teacherId = Integer.parseInt(request.getParameter("teacherId"));
			
			teacherDao.removeTeachers(teacherId);
		}

		return "teacherManagementForm";
	
	}

}
