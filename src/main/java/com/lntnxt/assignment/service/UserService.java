package com.lntnxt.assignment.service;

import java.util.List;

import com.lntnxt.assignment.entity.User;

public interface UserService {

	public List<User> getAllUsers();

	public User getUserById(String id);

	public boolean updateUserDetails(User user);

	public boolean deleteUser(String id);

}
