package com.lntnxt.assignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lntnxt.assignment.entity.User;
import com.lntnxt.assignment.service.LoginService;

@RestController
@RequestMapping("login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;

	@PostMapping("/userLogin")
	public User userLogin(@RequestBody User user) {
		return loginService.userLogin(user);
	}
	
	@PostMapping("registerUser")
	public User registerUser(@RequestBody User user) {
		return loginService.registerUser(user);
	}

}
