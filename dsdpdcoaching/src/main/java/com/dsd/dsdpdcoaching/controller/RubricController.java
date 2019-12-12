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
import com.dsd.dsdpdcoaching.dto.RubricLevelUp;
import com.dsd.dsdpdcoaching.service.RubricTotalCalculator;

@Controller
@SessionAttributes("schoolList")
public class RubricController {

	@Autowired
	private RubricDao rubricDao;
	@Autowired
	private RubricTotalCalculator rubricTotalCalculator;

	@GetMapping("/rubricForm.html")
	public String getRubricForm(Model model) {
		model.addAttribute("rubricData", new Rubric());
		model.addAttribute("rubricLevelUp", new RubricLevelUp());
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
	public String postRubricForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute Rubric rubricData, @ModelAttribute RubricLevelUp rubricLevelUp) {

		rubricData.setUserId(request.getUserPrincipal().getName());
		
		//set the 'completed' field for all records in the levelup list to 'false'
		for (int i = 0; i<rubricData.getLevelupList().size(); i++) {
			rubricData.getLevelupList().get(i).setCompleted("false");
			}
		
		//call the class to get the rubric total value
		int rubricScore = rubricTotalCalculator.getRubricTotal(rubricData.getPlanning(), rubricData.getAssessmentAndData(), rubricData.getPath(),
				rubricData.getPlace(), rubricData.getPace(), rubricData.getClassroommgmt(), rubricData.getTeacherrole(), rubricData.getStudentegmt(),
				rubricData.getStudentcolab(), rubricData.getTechnology());
		
		Integer teacherId = rubricData.getTeacherId();
		Rubric data = ((Rubric) SerializationUtils.clone(rubricData));
		data.setTeacherId(teacherId);
		data.setRubricScore(rubricScore);

		rubricDao.saveRubricData(data);

		//redirect user back to blank form so they can enter more data
		return "redirect:/rubricForm.html";
	}

}
