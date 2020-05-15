package com.lntnxt.assignment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lntnxt.assignment.dao.StudentDAO;
import com.lntnxt.assignment.entity.Student;
import com.lntnxt.assignment.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentDAO studentDAO;

	@Override
	public List<Student> getAllStudents() {
		return studentDAO.getAllStudents();
	}

	@Override
	public Student getStudentById(String id) {
		try {
			int userId = Integer.parseInt(id);
			return studentDAO.getStudentById(userId);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
		return new Student();

	}

	@Override
	public boolean updateStudentDetails(Student student) {
		return studentDAO.updateStudentDetails(student);
	}

}
