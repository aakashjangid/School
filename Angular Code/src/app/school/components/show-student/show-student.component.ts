import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  loggedInStudent: Student;
  student: Student = new Student();
  backup: Student;

  userId;
  showEdit: boolean = false;

  constructor(private studentService: StudentService, private encryptService: EncryptionService,
    private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    this.loggedInStudent = JSON.parse(this.encryptService.decrypt(sessionStorage.getItem('encrypt')));
  }

  ngOnInit(): void {
    if (!this.studentService.getStudent()) {
      this.route.params.subscribe(params => {
        this.userId = params['id'];
      });
      this.getStudentById();
    } else {
      this.student = this.studentService.getStudent();
    }
  }

  getStudentById() {
    this.studentService.getStudentById(this.userId).subscribe(
      (res: Student) => {
        this.student = res;
      }, err => {
        console.log('Error in fetching user', err);
      }
    );
  }

  editStudentDetails() {
    this.backup = JSON.parse(JSON.stringify(this.student));
    this.showEdit = true;
  }

  cancelEdit() {
    this.student = JSON.parse(JSON.stringify(this.backup));
    this.showEdit = false;
  }

  saveStudentDetails() {
    this.studentService.updateStudentDetails(this.student).subscribe(
      res => {
        this.showEdit = false;
      }, err => {
        this.toastr.error('Unable to update details', 'Error');
        console.log('Error in updating student details', err);

      }
    );

  }

}
