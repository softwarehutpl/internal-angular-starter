import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../common/services/auth/auth.service';

@Component({
  selector: 'app-user-dashboard-home',
  templateUrl: './user-dashboard-home.component.html',
  styleUrls: ['./user-dashboard-home.component.scss']
})
export class UserDashboardHomeComponent implements OnInit {

  constructor(private authService: AuthService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
