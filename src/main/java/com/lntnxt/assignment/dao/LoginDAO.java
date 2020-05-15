package com.lntnxt.assignment.dao;

import com.lntnxt.assignment.entity.User;

public interface LoginDAO {

	public User userLogin(User user);

	public User registerUser(User user);

}
