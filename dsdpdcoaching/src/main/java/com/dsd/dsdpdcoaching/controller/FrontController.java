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

import com.dsd.dsdpdcoaching.dao.NinjaLevelTrainingDao;
import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dto.ChicagoBlendRubric;
import com.dsd.dsdpdcoaching.dto.NinjaLevelTeachingData;
import com.dsd.dsdpdcoaching.dto.Rubric;
import com.dsd.dsdpdcoaching.dto.RubricLevelUp;
import com.dsd.dsdpdcoaching.service.EmailService;
import com.dsd.dsdpdcoaching.service.RubricTotalCalculator;

@Controller
@SessionAttributes("schoolList")
public class FrontController {

	@Autowired
	private RubricDao rubricDao;
	@Autowired
	private RubricTotalCalculator rubricTotalCalculator;
	@Autowired
	private EmailService emailService;
	@Autowired
	private NinjaLevelTrainingDao ninjaLevelTrainingDao;
	
	@GetMapping("/rubricForm.html")
	public String getRubricForm(Model model) {
		model.addAttribute("rubricData", new Rubric());
		model.addAttribute("rubricLevelUp", new RubricLevelUp());
		return "rubricForm";
	}
	
	@GetMapping("/chicagoBlendRubricForm.html")
	public String getChicagoBlendRubricForm(Model model) {
		model.addAttribute("rubricData", new Rubric());
		model.addAttribute("rubricLevelUp", new RubricLevelUp());
		return "chicagoBlendRubricForm";
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
	
	@GetMapping("/ninjalevelteaching.html")
	public String getNinjaLevelTeachingForm(Model model) {
		model.addAttribute("ninjaLevelTeachingData", new NinjaLevelTeachingData());
		return "ninjalevelteaching";
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
	
	@PostMapping("/ninjaBeltForm")
	public String postNinjaBeltForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute NinjaLevelTeachingData formData) {

		formData.setUserId(request.getUserPrincipal().getName());
		
		ninjaLevelTrainingDao.saveNinjaTrainingData(formData);
		
		return "ninjalevelteaching";
	}
	
	
	@PostMapping("/chicagoBlendRubricForm")
	public String postChicagoBlendRubricForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute ChicagoBlendRubric chicagoBlendRubricData) {

		chicagoBlendRubricData.setUserId(request.getUserPrincipal().getName());
		
		
		Integer teacherId = chicagoBlendRubricData.getTeacherId();
		ChicagoBlendRubric data = ((ChicagoBlendRubric) SerializationUtils.clone(chicagoBlendRubricData));
		data.setTeacherId(teacherId);

		rubricDao.saveChicagoBlendRubricData(data);
		
		//check if the email checkbox was checked to email the report to the teacher
		//if(request.getParameter("teachercheckbox")!=null) {
		//	emailService.sendRubricEmail(rubricData, request.getParameter("teachercheckbox"));
		//}

		//redirect user back to blank form so they can enter more data
		return "redirect:/chicagoBlendRubricForm.html";
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
	
	


}
