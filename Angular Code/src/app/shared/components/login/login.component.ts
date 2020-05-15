import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { EncryptionService } from '../../services/encryption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modeSchool: boolean = true;
  loginForm: boolean = true;

  user: User = new User();

  nameError: boolean = false;
  ageError: boolean = false;
  usernameError: boolean = false;
  passwordError: boolean = false;

  constructor(private loginService: LoginService, private toastr: ToastrService,
    private encryptService: EncryptionService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleMode(value: boolean) {
    this.modeSchool = value;
    this.usernameError = false;
    this.passwordError = false;
    let element = document.getElementById('school');
    if (value) {
      element.style.backgroundImage = "url('../../../../assets/VvHazk.jpg')";

    } else {
      element.style.backgroundImage = "url('../../../../assets/two-paper-tote-bags-1666067.jpg')";
    }
  }

  login() {
    if (this.user.userName && this.user.password) {
      this.loginService.userLogin(this.user).subscribe(
        (res: User) => {
          if (this.user.userId !== null) {
            sessionStorage.setItem('encrypt', this.encryptService.encrypt(JSON.stringify(res)));
            if (this.modeSchool) {
              this.router.navigate(['/school']);
            } else {
              this.router.navigate(['/product']);
            }
          } else {
            this.toastr.error('Invalid Credentials', 'Error')
          }
        }, err => {
          console.log('Error in userLogin', err);
        }
      );
    } else {
      this.toastr.error('Please fill all the details', 'Login Failed');
    }
  }

  toggleForm() {
    this.loginForm = !this.loginForm;
    this.usernameError = false;
    this.nameError = false;
    this.ageError = false;
    this.passwordError = false;
    this.user = new User();
  }

  registerUser() {
    if (this.user.name && this.user.age && this.user.userName && this.user.password && this.user.gender) {
      this.loginService.registerUser(this.user).subscribe(
        (res: User) => {
          sessionStorage.setItem('encrypt', this.encryptService.encrypt(JSON.stringify(res)));
          if (this.modeSchool) {
            this.router.navigate(['/school']);
          } else {
            this.router.navigate(['/product/home']);
          }
        }, err => {
          console.log('Error in registration', err);
        }
      );
    } else {
      this.toastr.error('Please fill all the details', 'Registration Failed');
    }
  }

  onNameChange() {
    if (this.user.name) {
      this.nameError = false;
    } else {
      this.nameError = true;
    }
  }

  onAgeChange() {
    if (this.user.age) {
      this.ageError = false;
    } else {
      this.ageError = true;
    }
  }

  onUserNameChange() {
    if (this.user.userName) {
      this.usernameError = false;
    } else {
      this.usernameError = true;
    }
  }

  onPasswordChange() {
    if (this.user.password) {
      this.passwordError = false;
    } else {
      this.passwordError = true;
    }
  }

}
