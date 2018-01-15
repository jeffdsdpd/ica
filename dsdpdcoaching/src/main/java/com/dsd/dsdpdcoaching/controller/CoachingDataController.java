package com.dsd.dsdpdcoaching.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.CoachingDataDao;
import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dto.CoachingData;
import com.dsd.dsdpdcoaching.dto.Teacher;

@Controller
@SessionAttributes("schoolList")
public class CoachingDataController {

	@Autowired
	private TeacherDao teacherDao;
	@Autowired
	private CoachingDataDao coachingDataDao;

	@GetMapping("/coachingForm.html")
	public String getCoachingForm(Model model) {
        model.addAttribute("coachingData", new CoachingData());
		return "coachingForm";
	}

	@PostMapping("/coachingForm")
	public String postCoachingForm(HttpServletRequest request, @ModelAttribute CoachingData coachingData) {
		coachingData.setUserid(request.getUserPrincipal().getName());
		coachingDataDao.saveCoachingData(coachingData);
		return "coachingForm";
	}

	@GetMapping(value="/getTeachersBySchool", produces="application/json")
	@ResponseBody
	public List<Teacher> getTeachersBySchool(@RequestParam Integer schoolId) {
		return teacherDao.getTeachersBySchoolId(schoolId);
	}
}
