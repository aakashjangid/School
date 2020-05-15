package com.lntnxt.assignment.dao;

import java.util.List;

import com.lntnxt.assignment.entity.Student;

public interface StudentDAO {

	public List<Student> getAllStudents();

	public Student getStudentById(int id);

	public boolean updateStudentDetails(Student student);

}
