package com.dsd.dsdpdcoaching.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dsd.dsdpdcoaching.dao.SchoolDao;
import com.dsd.dsdpdcoaching.dao.UserDao;
import com.dsd.dsdpdcoaching.dto.School;
import com.dsd.dsdpdcoaching.dto.User;
import com.dsd.dsdpdcoaching.dto.UserSchool;

@Controller
@SessionAttributes("schoolList")
public class DashboardController {
	@Autowired
	private SchoolDao schoolDao;
	@Autowired
	private UserDao userDao;
	
	
	@GetMapping({"/", "/dashboard.html"})
	public String getDashboard() {
		return "dashboard";
	}

    @ModelAttribute("schoolList")
    public List<School> getSchoolList(HttpServletRequest request) {
    		if(request.isUserInRole("admin")) {
	        return schoolDao.getSchools();
    		} else {
    			List<School> schools = new ArrayList<>();
    			User user = userDao.getUserByUsername(request.getUserPrincipal().getName());
    			for(UserSchool userSchool : user.getUserSchool()) {
    				schools.add(userSchool.getSchool());
    			}
    	        return schools;
    		}
    }
}
