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

import com.dsd.dsdpdcoaching.dao.InterventionDao;
import com.dsd.dsdpdcoaching.dao.RubricDao;
import com.dsd.dsdpdcoaching.dto.HokeIntervention;
import com.dsd.dsdpdcoaching.dto.HokeModelTeacherRubric;
import com.dsd.dsdpdcoaching.dto.HokeRubric;
import com.dsd.dsdpdcoaching.dto.HokeRubricLevelUp;
import com.dsd.dsdpdcoaching.dto.Rubric;
import com.dsd.dsdpdcoaching.dto.RubricLevelUp;
import com.dsd.dsdpdcoaching.service.EmailService;
import com.dsd.dsdpdcoaching.service.HokeRubricPhaseCalculator;
import com.dsd.dsdpdcoaching.service.RubricTotalCalculator;

@Controller
@SessionAttributes("schoolList")
public class FrontController {

	@Autowired
	private RubricDao rubricDao;
	@Autowired
	private InterventionDao interventionDao;
	@Autowired
	private RubricTotalCalculator rubricTotalCalculator;
	@Autowired
	private HokeRubricPhaseCalculator hokeRubricPhaseCalculator;
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
		model.addAttribute("rubricLevelUp", new RubricLevelUp());
		return "hokeRubricForm";
	}
	
	@GetMapping("/hokeModelTeacherRubricForm.html")
	public String getHokeModelTeacherRubricForm(Model model) {
		model.addAttribute("hokeModelTeacherRubricData", new HokeModelTeacherRubric());
		model.addAttribute("hokeRubricLevelUp", new HokeRubricLevelUp());
		return "hokeModelTeacherRubricForm";
	}
	
	@GetMapping("/hokeInterventionForm.html")
	public String getHokeInterventionForm(Model model) {
		model.addAttribute("hokeInterventionData", new HokeIntervention());
		//model.addAttribute("hokeRubricLevelUp", new HokeRubricLevelUp());
		return "hokeInterventionForm";
	}
	
	@GetMapping("/rubricReport.html")
	public String getRubricReport(Model model) {
		return "rubricReport";
	}
	
	@GetMapping("/hokeModelTeacherRubricReport.html")
	public String getHokeModelTeacherRubricReport(Model model) {
		return "hokeModelTeacherRubricReport";
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
	public String postHokeRubricForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute HokeRubric hokeRubricData, @ModelAttribute RubricLevelUp rubricLevelUp) {

		hokeRubricData.setUserId(request.getUserPrincipal().getName());
		
		Integer teacherId = hokeRubricData.getTeacherId();
		HokeRubric hokeRubicData = ((HokeRubric) SerializationUtils.clone(hokeRubricData));
		hokeRubicData.setTeacherId(teacherId);
		
		//call the class to get the rubric total value
		int rubricPhase = hokeRubricPhaseCalculator.getHokeRubricPhase(hokeRubicData);
				
		hokeRubicData.setPhase(rubricPhase);

		rubricDao.saveHokeRubricData(hokeRubicData);
		
		//check if the email checkbox was checked to email the report to the teacher
		//if(request.getParameter("teachercheckbox")!=null) {
		//	emailService.sendRubricEmail(hokeRubricData, request.getParameter("teachercheckbox"));
		//}

		//redirect user back to blank form so they can enter more data
		return "redirect:/hokeRubricForm.html";
	}
	
	@PostMapping("/hokeModelTeacherRubricForm")
	public String postHokeModelTeacherRubricForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute HokeModelTeacherRubric hokeModelTeacherRubricData, @ModelAttribute HokeRubricLevelUp hokeRubricLevelUp) {

		hokeModelTeacherRubricData.setUserId(request.getUserPrincipal().getName());
		
		//set the 'completed' field for all records in the levelup list to 'false'
		for (int i = 0; i<hokeModelTeacherRubricData.getLevelupList().size(); i++) {
			if (hokeModelTeacherRubricData.getLevelupList().get(i).getLevelup() == null || hokeModelTeacherRubricData.getLevelupList().get(i).getLevelup().isEmpty()) {
				hokeModelTeacherRubricData.getLevelupList().remove(i);
				i--;
			} else {
				hokeModelTeacherRubricData.getLevelupList().get(i).setCompleted("false");
			}
		}
		
		Integer teacherId = hokeModelTeacherRubricData.getTeacherId();
		HokeModelTeacherRubric hokeModelTeacherRubric = ((HokeModelTeacherRubric) SerializationUtils.clone(hokeModelTeacherRubricData));
		hokeModelTeacherRubric.setTeacherId(teacherId);
		hokeModelTeacherRubric.setRubricScore(0);
		
		rubricDao.saveHokeModelTeacherRubricData(hokeModelTeacherRubricData);
		
		//check if the email checkbox was checked to email the report to the teacher
		//if(request.getParameter("teachercheckbox")!=null) {
		//	emailService.sendHokeRubricEmail(hokeRubricData, request.getParameter("teachercheckbox"));
		//}
		
		//redirect user back to blank form so they can enter more data
		return "redirect:/hokeModelTeacherRubricForm.html";
		
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
	
	@PostMapping("/hokeModelTeacherRubricReportUpdate")
	public String postHokeModelTeacherRubricReportUpdate(HttpSession session, HttpServletRequest request, Model model) {
		
		String checked = request.getParameter("checkedValues");
		String[] checkedarray = checked.split(",");

		String unchecked = request.getParameter("unCheckedValues");
		String[] uncheckedarray = unchecked.split(",");
		
		rubricDao.updateHokeRubricLevelupItems(checkedarray, uncheckedarray);
		
		return "redirect:/hokeModelTeacherRubricReport.html";
	
	}
	
	@PostMapping("/hokeInterventionForm")
	public String postHokeInterventionForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute HokeIntervention hokeInterventionData) {

		hokeInterventionData.setUserId(request.getUserPrincipal().getName());
		
		Integer teacherId = hokeInterventionData.getTeacherId();
		//HokeRubric hokeRubicData = ((HokeRubric) SerializationUtils.clone(hokeInterventionData));
		//hokeInterventionData.setTeacherId(teacherId);
		
		interventionDao.saveInterventionData(hokeInterventionData);
		
		//check if the email checkbox was checked to email the report to the teacher
		//if(request.getParameter("teachercheckbox")!=null) {
		//	emailService.sendRubricEmail(hokeRubricData, request.getParameter("teachercheckbox"));
		//}

		//redirect user back to blank form so they can enter more data
		return "redirect:/hokeInterventionForm.html";
	}

}
