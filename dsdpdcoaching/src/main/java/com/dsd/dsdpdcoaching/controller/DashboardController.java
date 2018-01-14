package com.dsd.dsdpdcoaching.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.SchoolDao;
import com.dsd.dsdpdcoaching.dto.School;

@Controller
@SessionAttributes("schoolList")
public class DashboardController {
	@Autowired
	private SchoolDao schoolDao;
	
	
	@GetMapping({"/", "/dashboard.html"})
	public String getDashboard() {
		return "dashboard";
	}

    @ModelAttribute("schoolList")
    public List<School> getSchoolList(HttpServletRequest request) {
    		if(request.isUserInRole("admin")) {
	        return schoolDao.getSchools();
    		} else {
    	        return schoolDao.getSchoolsByUser(request.getUserPrincipal().getName());
    		}
    }
}
