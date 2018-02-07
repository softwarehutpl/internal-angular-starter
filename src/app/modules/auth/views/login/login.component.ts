import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AuthService } from '../../../../common/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;
  loading = false;
  user: any = {};

  constructor(private $state: StateService, private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.user.username, this.user.password)
    .then((user) => {
      this.$state.go('userDashboardHome');
    });
  }

}
