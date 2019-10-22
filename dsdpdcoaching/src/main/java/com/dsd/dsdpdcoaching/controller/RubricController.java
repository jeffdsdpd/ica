package com.dsd.dsdpdcoaching.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.SerializationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dto.Rubric;

@Controller
@SessionAttributes("schoolList")
public class RubricController {

	@Autowired
	private RubricDao rubricDao;

	@GetMapping("/rubricForm.html")
	public String getRubricForm(Model model) {
		model.addAttribute("rubricData", new Rubric());
		return "rubricForm";
	}
	
	@GetMapping("/rubricReport.html")
	public String getRubricReport(Model model) {
		return "rubricReport";
	}
	
	@GetMapping("/teacherProgressionReport.html")
	public String getTeacherProgressionReport(Model model) {
		return "teacherProgressionReport";
	}
	
	@GetMapping("/schoolRubricReport.html")
	public String getSchoolRubricReport(Model model) {
		return "schoolRubricReport";
	}
	
	@PostMapping("/rubricForm")
	public String postRubricForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute Rubric rubricData) {

		rubricData.setUserId(request.getUserPrincipal().getName());
		
		Integer teacherId = rubricData.getTeacherId();
		Rubric data = ((Rubric) SerializationUtils.clone(rubricData));
		data.setTeacherId(teacherId);
			
		rubricDao.saveRubricData(data);

		// Redirect user back to blank form so they can enter more data
		return "redirect:/rubricForm.html";
	}

}
