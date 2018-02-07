import { Component } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AuthService } from './common/services/auth/auth.service';
import UserModel from './common/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test app';
  loggedUser: UserModel;

  constructor(private $state: StateService, private authService: AuthService) {
    this.loggedUser = this.authService.getLoggedUser();
  }

  logout() {
    this.authService.logout();
  }

  changeRoute() {
    this.$state.go('foo');
  }
}
