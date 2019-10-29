package com.dsd.dsdpdcoaching.controller;

import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.ActionPlanDao;
import com.dsd.dsdpdcoaching.dto.ActionPlanData;


@Controller
@SessionAttributes("schoolList")
public class ActionPlanController {

	@Autowired
	private ActionPlanDao actionPlanDao;

	@GetMapping("/actionPlanForm.html")
	public String getActionPlanForm(Model model) {
		model.addAttribute("actionPlanData", new ActionPlanData());
		return "actionPlanForm";
	}
	
	@PostMapping("/actionPlanForm")
	public String postActionPlanForm(HttpSession session, HttpServletRequest request, Model model,
			@ModelAttribute ActionPlanData actionPlanData) {
		
		//store the date the record was created
		java.util.Date currentDate = Calendar.getInstance().getTime();
		
		actionPlanData.setCompleted("false");
		actionPlanData.setEntrydate(currentDate);
		
		actionPlanDao.saveActionPlanData(actionPlanData);

		// Redirect user back to blank form so they can enter more data
		return "redirect:/actionPlanForm.html";
	}

}
