package com.lntnxt.assignment.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.lntnxt.assignment.entity.Student;

public class StudentMapper implements RowMapper<Student> {

	@Override
	public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
		Student student = new Student();
		student.setUserId(rs.getInt("user_id"));
		student.setName(rs.getString("name"));
		student.setAge(rs.getInt("age"));
		student.setGender(rs.getString("gender"));
		student.setRollNumber(rs.getInt("user_id"));
		student.setStandard(rs.getInt("standard"));
		return student;
	}

}
