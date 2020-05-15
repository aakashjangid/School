import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  backup: User;
  userId;
  showEdit: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (!this.userService.getUser()) {
      this.route.params.subscribe(params => {
        this.userId = params['id'];
      });
      this.getUserById();
    } else {
      this.user = this.userService.getUser();
    }
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe(
      res => {
        this.user = res as User;
      }, err => {
        console.log('Error in user', err);
      }
    );
  }

  editUserDetails() {
    this.backup = JSON.parse(JSON.stringify(this.user));
    this.showEdit = true;
  }

  cancelEdit() {
    this.user = JSON.parse(JSON.stringify(this.backup));
    this.showEdit = false;
  }

  saveUserDetails() {
    this.userService.updateUserDetails(this.user).subscribe(
      res => {
        this.showEdit = false;
        this.toastr.success('User details updated successfully', 'Success');
      }, err => {
        this.toastr.error('Unable to update details', 'Error');
        console.log('Error in updating user details', err);

      }
    );

  }

}
