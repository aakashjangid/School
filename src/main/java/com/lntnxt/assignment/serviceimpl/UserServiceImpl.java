package com.lntnxt.assignment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lntnxt.assignment.dao.UserDAO;
import com.lntnxt.assignment.entity.User;
import com.lntnxt.assignment.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO userDAO;

	@Override
	public List<User> getAllUsers() {
		return userDAO.getAllUsers();
	}

	@Override
	public User getUserById(String id) {
		return userDAO.getUserById(id);
	}

	@Override
	public boolean updateUserDetails(User user) {
		return userDAO.updateUserDetails(user);
	}

	@Override
	public boolean deleteUser(String id) {
		return userDAO.deleteUser(id);
	}

}
