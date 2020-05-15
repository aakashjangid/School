import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  BASE_URL: string = 'http://' + window.location.hostname + ':8080';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.BASE_URL + '/users/getAllUsers');
  }

  getUserById(id) {
    return this.http.get(this.BASE_URL + '/users/getUserById/' + id);
  }

  updateUserDetails(user: User) {
    return this.http.post(this.BASE_URL + '/users/updateUserDetails', user);
  }

  deleteUser(id) {
    return this.http.get(this.BASE_URL + '/users/deleteUser/' + id);
  }

}
