package com.lntnxt.assignment.service;

import java.util.List;

import com.lntnxt.assignment.entity.Student;

public interface StudentService {

	public List<Student> getAllStudents();

	public Student getStudentById(String id);

	public boolean updateStudentDetails(Student student);

}
