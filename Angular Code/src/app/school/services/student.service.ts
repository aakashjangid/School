import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudent: Student;

  getStudent() {
    return this.selectedStudent;
  }

  setStudent(student) {
    this.selectedStudent = student;
  }

  BASE_URL: string = 'http://' + window.location.hostname + ':8080';

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get(this.BASE_URL + '/student/getAllStudents');
  }

  getStudentById(id) {
    return this.http.get(this.BASE_URL + '/student/getStudentById/' + id);
  }

  updateStudentDetails(student) {
    return this.http.post(this.BASE_URL + '/student/updateStudentDetails', student);
  }
}
