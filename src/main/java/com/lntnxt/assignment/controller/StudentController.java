package com.lntnxt.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lntnxt.assignment.entity.Student;
import com.lntnxt.assignment.service.StudentService;

@RestController
@RequestMapping("student")
public class StudentController {

	@Autowired
	private StudentService studentService;

	@GetMapping("/getAllStudents")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}

	@GetMapping("/getStudentById/{id}")
	public Student getStudentById(@PathVariable("id") String id) {
		return studentService.getStudentById(id);
	}

	@PostMapping("/updateStudentDetails")
	public boolean updateStudentDetails(@RequestBody Student student) {
		return studentService.updateStudentDetails(student);
	}
}
