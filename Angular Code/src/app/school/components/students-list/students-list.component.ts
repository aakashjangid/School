import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../models/student';
import { AgGridAngular } from 'ag-grid-angular';
import { StudentService } from '../../services/student.service';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  student: Student;
  @ViewChild('agGrid') agGrid: AgGridAngular;

  constructor(private studentService: StudentService, private encryptService: EncryptionService,
    private router: Router) {
    this.student = JSON.parse(this.encryptService.decrypt(sessionStorage.getItem('encrypt')));
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  columnDefs = [
    { headerName: 'Roll No.', field: 'rollNumber', sortable: true },
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Age', field: 'age', sortable: true },
    { headerName: 'Gender', field: 'gender', sortable: true },
    { headerName: 'Standard', field: 'standard', sortable: true }
  ];

  rowData = [];
  rowSelection = 'single';

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(
      (res: Student[]) => {
        this.rowData = res;
      }, err => {
        console.log('Error in fetching students', err);
      }
    );
  }

  showData(event) {
    let selectedRows = this.agGrid.api.getSelectedRows();
    this.studentService.setStudent(selectedRows[0]);
    this.router.navigate(['/school/student/' + selectedRows[0].userId])
  }

}
