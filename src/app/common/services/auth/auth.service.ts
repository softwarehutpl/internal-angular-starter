import { Injectable } from '@angular/core';
import { StateService } from '@uirouter/angular';
import UserModel from '../../models/user.model';

@Injectable()
export class AuthService {
  loggedUser = undefined;

  constructor(private $state: StateService) {}

  getLoggedUser() {
    return this.loggedUser;
  }

  isAuthenticated() {
    return !!this.loggedUser;
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      this.loggedUser = new UserModel({username: 'a', password: 'b'});
      return resolve(this.loggedUser);
    });
  }

  logout() {
    delete this.loggedUser;
    this.$state.go('login');
  }

}
