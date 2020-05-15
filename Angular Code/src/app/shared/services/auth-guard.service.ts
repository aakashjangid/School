import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';
import { Router, CanActivate } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private encryptionService: EncryptionService, private router: Router) {

  }
  canActivate(): boolean {
    if (sessionStorage.getItem('encrypt')) {
      if (JSON.parse(this.encryptionService.decrypt(sessionStorage.getItem('encrypt'))))
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
