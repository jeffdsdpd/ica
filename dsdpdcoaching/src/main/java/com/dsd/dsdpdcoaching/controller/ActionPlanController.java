package com.dsd.dsdpdcoaching.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes("schoolList")
public class ActionPlanController {

	//@Autowired
	//private ActionPlanDao actionPlanDao;

	@GetMapping("/actionPlanForm.html")
	public String getActionPlanForm(Model model) {
		return "actionPlanForm";
	}


}
