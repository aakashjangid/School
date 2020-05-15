package com.lntnxt.assignment.service;

import com.lntnxt.assignment.entity.User;

public interface LoginService {

	public User userLogin(User user);

	public User registerUser(User user);

}
