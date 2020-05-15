package com.lntnxt.assignment.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lntnxt.assignment.dao.LoginDAO;
import com.lntnxt.assignment.entity.User;
import com.lntnxt.assignment.rowmapper.UserMapper;

@Repository
public class LoginDAOImpl implements LoginDAO {

	@Autowired
	JdbcTemplate jdbc;

	@Override
	public User userLogin(User user) {
		try {
			String sql = "SELECT * FROM users WHERE username=? AND password=?";
			return jdbc.queryForObject(sql, new Object[] { user.getUserName(), user.getPassword() }, new UserMapper());
		} catch (Exception e) {
			e.printStackTrace();
			return new User();
		}
	}

	@Override
	public User registerUser(User user) {
		String sql = "";
		if (user.getGender() != null || user.getGender() != "") {
			sql = "INSERT INTO users(name, username, password, age, gender) VALUES(?,?,?,?,?)";
			jdbc.update(sql, user.getName(), user.getUserName(), user.getPassword(), user.getAge(), user.getGender());
		} else {
			sql = "INSERT INTO users(name, username, password) VALUES(?,?,?)";
			jdbc.update(sql, user.getName(), user.getUserName(), user.getPassword());
		}
		return userLogin(user);
	}

}
