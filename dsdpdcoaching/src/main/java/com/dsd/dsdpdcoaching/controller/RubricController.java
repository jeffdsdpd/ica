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
import com.dsd.dsdpdcoaching.dto.HokeRubric;
import com.dsd.dsdpdcoaching.dto.HokeRubricLevelUp;
import com.dsd.dsdpdcoaching.dto.Rubric;
import com.dsd.dsdpdcoaching.dto.RubricLevelUp;
import com.dsd.dsdpdcoaching.service.EmailService;
import com.dsd.dsdpdcoaching.service.RubricTotalCalculator;

@Controller
@SessionAttributes("schoolList")
public class RubricController {

	@Autowired
	private RubricDao rubricDao;
	@Autowired
	private RubricTotalCalculator rubricTotalCalculator;
	@Autowired
	private EmailService emailService;

	@GetMapping("/rubricForm.html")
	public String getRubricForm(Model model) {
		model.addAttribute("rubricData", new Rubric());
		model.addAttribute("rubricLevelUp", new RubricLevelUp());
		return "rubricForm";
	}
	
	@GetMapping("/hokeRubricForm.html")
	public String getHokeRubricForm(Model model) {
		model.addAttribute("hokeRubricData", new HokeRubric());
		model.addAttribute("hokeRubricLevelUp", new HokeRubricLevelUp());
		return "hokeRubricForm";
	}
	
	@GetMapping("/rubricReport.html")
	public String getRubricReport(Model model) {
		return "rubricReport";
	}
	
	@GetMapping("/hokeRubricReport.html")
	public String getHokeRubricReport(Model model) {
		return "hokeRubricReport";
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
			if (rubricData.getLevelupList().get(i).getLevelup() == null || rubricData.getLevelupList().get(i).getLevelup().isEmpty()) {
				rubricData.getLevelupList().remove(i);
				i--;
			} else {
				rubricData.getLevelupList().get(i).setCompleted("false");
			}
		}
		
		//call the class to get the rubric total value
		int rubricScore = rubricTotalCalculator.getRubricTotal(rubricData.getPlanning(), rubricData.getAssessmentAndData(), rubricData.getPath(),
				rubricData.getPlace(), rubricData.getPace(), rubricData.getClassroommgmt(), rubricData.getTeacherrole(), rubricData.getStudentegmt(),
				rubricData.getStudentcolab(), rubricData.getTechnology());
		
		Integer teacherId = rubricData.getTeacherId();
		Rubric data = ((Rubric) SerializationUtils.clone(rubricData));
		data.setTeacherId(teacherId);
		data.setRubricScore(rubricScore);
		rubricData.setRubricScore(rubricScore);

		rubricDao.saveRubricData(data);
		
		//check if the email checkbox was checked to email the report to the teacher
		if(request.getParameter("teachercheckbox")!=null) {
			emailService.sendRubricEmail(rubricData, request.getParameter("teachercheckbox"));
		}

		//redirect user back to blank form so they can enter more data
		return "redirect:/rubricForm.html";
	}
	
	
	@PostMapping("/hokeRubricForm")
	public String postHokeRubricForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute HokeRubric hokeRubricData, @ModelAttribute HokeRubricLevelUp hokeRubricLevelUp) {

		hokeRubricData.setUserId(request.getUserPrincipal().getName());
		
		//set the 'completed' field for all records in the levelup list to 'false'
		for (int i = 0; i<hokeRubricData.getLevelupList().size(); i++) {
			if (hokeRubricData.getLevelupList().get(i).getLevelup() == null || hokeRubricData.getLevelupList().get(i).getLevelup().isEmpty()) {
				hokeRubricData.getLevelupList().remove(i);
				i--;
			} else {
				hokeRubricData.getLevelupList().get(i).setCompleted("false");
			}
		}
		
		Integer teacherId = hokeRubricData.getTeacherId();
		HokeRubric hokeData = ((HokeRubric) SerializationUtils.clone(hokeRubricData));
		hokeData.setTeacherId(teacherId);
		hokeData.setRubricScore(0);
		
		rubricDao.saveHokeRubricData(hokeData);
		
		//check if the email checkbox was checked to email the report to the teacher
		//if(request.getParameter("teachercheckbox")!=null) {
		//	emailService.sendHokeRubricEmail(hokeRubricData, request.getParameter("teachercheckbox"));
		//}
		
		//redirect user back to blank form so they can enter more data
		return "redirect:/hokeRubricForm.html";
		
	}
	
	@PostMapping("/rubricReportUpdate")
	public String postRubricReportUpdate(HttpSession session, HttpServletRequest request, Model model) {
		
		String checked = request.getParameter("checkedValues");
		String[] checkedarray = checked.split(",");

		String unchecked = request.getParameter("unCheckedValues");
		String[] uncheckedarray = unchecked.split(",");
		
		rubricDao.updateRubricLevelupItems(checkedarray, uncheckedarray);
		
		return "redirect:/rubricReport.html";
	
	}
	
	@PostMapping("/hokeRubricReportUpdate")
	public String postHokeRubricReportUpdate(HttpSession session, HttpServletRequest request, Model model) {
		
		String checked = request.getParameter("checkedValues");
		String[] checkedarray = checked.split(",");

		String unchecked = request.getParameter("unCheckedValues");
		String[] uncheckedarray = unchecked.split(",");
		
		rubricDao.updateHokeRubricLevelupItems(checkedarray, uncheckedarray);
		
		return "redirect:/hokeRubricReport.html";
	
	}

}
