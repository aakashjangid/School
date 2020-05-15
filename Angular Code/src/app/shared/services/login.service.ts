import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL: string = 'http://' + window.location.hostname + ':8080';

  constructor(private http: HttpClient) { }

  userLogin(user: User) {
    return this.http.post(this.BASE_URL + '/login/userLogin', user);
  }

  registerUser(user: User) {
    return this.http.post(this.BASE_URL + '/login/registerUser', user);
  }

}
