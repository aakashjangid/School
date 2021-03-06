package com.lntnxt.assignment.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.lntnxt.assignment.entity.User;

public class UserMapper implements RowMapper<User> {

	@Override
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		User user = new User();
		user.setUserId(rs.getInt("user_id"));
		user.setUserName(rs.getString("username"));
		user.setPassword(rs.getString("password"));
		user.setName(rs.getString("name"));
		return user;
	}

}
