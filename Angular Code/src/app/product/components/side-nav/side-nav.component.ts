import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/shared/services/encryption.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private encryptService: EncryptionService) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.encryptService.decrypt(sessionStorage.getItem('encrypt')));
  }

  goHome() {
    this.router.navigate(['/product/home']);
  }

  addProduct() {
    this.router.navigate(['/product/add']);
  }

  editProduct() {
    this.router.navigate(['/product/edit']);
  }

  goToUsers() {
    this.router.navigate(['/product/users']);
  }

}
