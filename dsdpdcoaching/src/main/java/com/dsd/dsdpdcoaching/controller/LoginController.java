package com.dsd.dsdpdcoaching.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.dsd.dsdpdcoaching.service.LoginService;

@Controller
public class LoginController {
	
    @Autowired
    LoginService service;

    @RequestMapping("/")
    public String showLoginPage(ModelMap model){
    	
        return "index";

    }

    @RequestMapping(value="/login", method = RequestMethod.POST)
    public String showWelcomePage(ModelMap model, @RequestParam String name, @RequestParam String password){

        boolean isValidUser = service.validateUser(name, password);

        if (!isValidUser) {
            model.put("errorMessage", "Invalid Credentials");
            return "index";
        }

        model.put("name", name);
        model.put("password", password);

        return "dashboard";

    }

}
