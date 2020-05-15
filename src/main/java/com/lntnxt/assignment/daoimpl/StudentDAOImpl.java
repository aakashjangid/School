package com.lntnxt.assignment.daoimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lntnxt.assignment.dao.StudentDAO;
import com.lntnxt.assignment.entity.Student;
import com.lntnxt.assignment.rowmapper.StudentMapper;

@Repository
public class StudentDAOImpl implements StudentDAO {

	@Autowired
	JdbcTemplate jdbc;

	@Override
	public List<Student> getAllStudents() {
		String sql = "SELECT * FROM users";
		return jdbc.query(sql, new StudentMapper());
	}

	@Override
	public Student getStudentById(int id) {
		String sql = "SELECT * FROM users WHERE user_id=?";
		return jdbc.queryForObject(sql, new Object[] { id }, new StudentMapper());
	}

	@Override
	public boolean updateStudentDetails(Student student) {
		String sql = "UPDATE users SET name=?, age=?, gender=?, standard=? WHERE user_id=?";
		jdbc.update(sql, student.getName(), student.getAge(), student.getGender(), student.getStandard(),
				student.getUserId());
		return true;
	}

}
