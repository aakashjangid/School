package com.lntnxt.assignment.daoimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lntnxt.assignment.dao.UserDAO;
import com.lntnxt.assignment.entity.User;
import com.lntnxt.assignment.rowmapper.UserMapper;

@Repository
public class UserDAOImpl implements UserDAO {

	@Autowired
	JdbcTemplate jdbc;

	@Override
	public List<User> getAllUsers() {
		String sql = "SELECT * FROM users";
		return jdbc.query(sql, new UserMapper());
	}

	@Override
	public User getUserById(String id) {
		String sql = "SELECT * FROM users WHERE user_id=?";
		return jdbc.queryForObject(sql, new Object[] { id }, new UserMapper());
	}

	@Override
	public boolean updateUserDetails(User user) {
		String sql = "UPDATE users SET name=?, username=? WHERE user_id=?";
		jdbc.update(sql, user.getName(), user.getUserName(), user.getUserId());
		return true;
	}

	@Override
	public boolean deleteUser(String id) {
		String sql = "DELETE FROM users WHERE user_id=?";
		jdbc.update(sql, id);
		return true;
	}

}
