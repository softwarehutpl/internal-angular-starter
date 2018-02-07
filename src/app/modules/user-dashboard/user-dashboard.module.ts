import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardHomeComponent } from './views/user-dashboard-home/user-dashboard-home.component';
import { USER_DASBOARD_STATES } from './user-dashboard.states';
import { UIRouterModule } from '@uirouter/angular';
// import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: USER_DASBOARD_STATES
    }),
    // SharedModule
  ],
  declarations: [UserDashboardHomeComponent]
})
export class UserDashboardModule { }
