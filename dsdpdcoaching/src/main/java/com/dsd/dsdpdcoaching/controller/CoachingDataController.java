package com.dsd.dsdpdcoaching.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.multipart.MultipartFile;

import com.dsd.dsdpdcoaching.dao.CoachingDataDao;
import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dto.CoachingData;
import com.dsd.dsdpdcoaching.dto.Teacher;

@Controller
@SessionAttributes("schoolList")
public class CoachingDataController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CoachingDataController.class);

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
	public String postCoachingForm(HttpServletRequest request, @ModelAttribute CoachingData coachingData, @RequestParam("photo") final MultipartFile photo) {
		LOGGER.debug("Teacher posted: " + coachingData.getTeacherid());
		LOGGER.debug("Photo: " + photo);
		coachingData.setUserid(request.getUserPrincipal().getName());
		coachingDataDao.saveCoachingData(coachingData);
		return "coachingForm";
	}

	@GetMapping("/coachingReport.html")
	public String getCoachingReport() {
		return "coachingReport";
	}

	@GetMapping(value="/getTeachersBySchool", produces="application/json")
	@ResponseBody
	public List<Teacher> getTeachersBySchool(@RequestParam Integer schoolId) {
		return teacherDao.getTeachersBySchoolId(schoolId);
	}
	
	/**
	 * Returns ids and dates of coaching data for specified school id and teacher id.
	 * 
	 * @param schoolId
	 * @return
	 */
	@GetMapping(value="/getCoachingDatesBySchoolAndTeacher", produces="application/json")
	@ResponseBody
	public List<Map<Integer, Date>> getCoachingDatesBySchoolAndTeacher(@RequestParam Integer schoolId, @RequestParam Integer teacherId) {
		return coachingDataDao.getCoachingDatesBySchoolAndTeacher(schoolId, teacherId);
	}

	@GetMapping(value="/getCoachingDataById", produces="application/json")
	@ResponseBody
	public CoachingData getCoachingReportById(@RequestParam Integer id) {
		return coachingDataDao.getCoachingDataById(id);
	}
}
