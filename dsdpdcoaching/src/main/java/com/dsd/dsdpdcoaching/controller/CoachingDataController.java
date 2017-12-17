package com.dsd.dsdpdcoaching.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("schoolList")
public class CoachingDataController {

	@GetMapping("/coachingForm.html")
	public String getDashboard() {
		return "coachingForm";
	}
}
