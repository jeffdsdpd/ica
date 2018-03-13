package com.dsd.dsdpdcoaching.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.RubricDataDao;
import com.dsd.dsdpdcoaching.dto.RubricData;

@Controller
@SessionAttributes("schoolList")
public class RubricDataController {
	@Autowired
	private RubricDataDao rubricDataDao;

	@GetMapping("/rubricForm.html")
	public String getCoachingForm(Model model) {
        model.addAttribute("rubricData", new RubricData());
		return "rubricForm";
	}
	
	@PostMapping("/rubricForm")
	public String postRubricForm(HttpServletRequest request, Model model, @ModelAttribute RubricData rubricData) {
		rubricData.setUserId(request.getUserPrincipal().getName());
		rubricDataDao.saveRubricData(rubricData);

		//Redirect user back to blank form so they can enter more data
		return "redirect:/rubricForm.html";
	}
	
	@GetMapping("/rubricReport.html")
	public String getCoachingReport() {
		return "rubricReport";
	}
}
