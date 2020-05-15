package com.lntnxt.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lntnxt.assignment.entity.User;
import com.lntnxt.assignment.service.UserService;

@RestController
@RequestMapping("users")
public class UserController {
	
	@Autowired
	private UserService userService;

	@GetMapping("/getAllUsers")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/getUserById/{id}")
	public User getUserById(@PathVariable("id") String id) {
		return userService.getUserById(id);
	}

	@PostMapping("updateUserDetails")
	public boolean updateUserDetails(@RequestBody User user) {
		return userService.updateUserDetails(user);
	}
	
	@GetMapping("deleteUser/{id}")
	public boolean deleteUser(@PathVariable("id") String id) {
		return userService.deleteUser(id);
	}
}
