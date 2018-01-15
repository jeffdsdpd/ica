package com.dsd.dsdpdcoaching.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.TeacherDao;
import com.dsd.dsdpdcoaching.dto.Teacher;

@Controller
@SessionAttributes("schoolList")
public class CoachingDataController {
	@Autowired
	private TeacherDao teacherDao;

	@GetMapping("/coachingForm.html")
	public String getDashboard() {
		return "coachingForm";
	}
	
	@GetMapping(value="/getTeachersBySchool", produces="application/json")
	@ResponseBody
	public List<Teacher> getTeachersBySchool(@RequestParam Integer schoolId) {
		return teacherDao.getTeachersBySchoolId(schoolId);
	}
}
