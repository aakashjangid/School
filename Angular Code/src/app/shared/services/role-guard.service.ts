import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EncryptionService } from './encryption.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private encryptionService: EncryptionService, private router: Router) {

  }
  canActivate(): boolean {
    if (sessionStorage.getItem('encrypt')) {
      let user: User = JSON.parse(this.encryptionService.decrypt(sessionStorage.getItem('encrypt')));
      if (user.name === 'Admin')
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
