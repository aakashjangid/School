import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;
  rowData = [];
  rowSelection = 'single';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'User Name', field: 'userName', sortable: true },
  ];

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (res: User[]) => {
        this.rowData = res;
      }, err => {
        console.log('Error in fetching users', err);
      }
    );
  }

  showData(event) {
    let selectedRows = this.agGrid.api.getSelectedRows();
    this.userService.setUser(selectedRows[0]);
    this.router.navigate(['/product/user/' + selectedRows[0].userId])
  }

}
