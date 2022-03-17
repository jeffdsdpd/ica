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

import com.dsd.dsdpdcoaching.dao.CoachingDataDao;
import com.dsd.dsdpdcoaching.dto.CoachingData;

@Controller
@SessionAttributes("schoolList")
public class CoachingController {
	//private static final Logger LOGGER = LoggerFactory.getLogger(CoachingController.class);

	@Autowired
	private CoachingDataDao coachingDataDao;

	@GetMapping("/coachingForm.html")
	public String getCoachingForm(Model model, HttpSession session) {

		model.addAttribute("coachingData", new CoachingData());
		return "coachingForm";
	}

	@PostMapping("/coachingForm")
	public String postCoachingForm(HttpSession session, HttpServletRequest request, Model model, @ModelAttribute CoachingData coachingData) {

		coachingData.setUserId(request.getUserPrincipal().getName());
		
		for (Integer teacherId : coachingData.getTeacherIds()) {
			CoachingData data = (CoachingData) SerializationUtils.clone(coachingData);
			data.setTeacherId(teacherId);
			coachingDataDao.saveCoachingData(data);
		}
		return "coachingForm";
	}

	@GetMapping("/coachingReport.html")
	public String getCoachingReport(HttpSession session) {
		return "coachingReport";
	}

}
