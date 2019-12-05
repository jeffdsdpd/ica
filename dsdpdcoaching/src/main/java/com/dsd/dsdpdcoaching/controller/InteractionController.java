package com.dsd.dsdpdcoaching.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("schoolList")
public class InteractionController {
	
	@GetMapping("/interactionReport.html")
	public String getInteractionReport(HttpSession session) {
		return "interactionReport";
	}

}
