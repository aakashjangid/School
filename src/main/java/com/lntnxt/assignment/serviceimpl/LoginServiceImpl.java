package com.lntnxt.assignment.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lntnxt.assignment.dao.LoginDAO;
import com.lntnxt.assignment.entity.User;
import com.lntnxt.assignment.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private LoginDAO loginDAO;
	
	@Override
	public User userLogin(User user) {
		return loginDAO.userLogin(user);
	}

	@Override
	public User registerUser(User user) {
		return loginDAO.registerUser(user);
	}

}
