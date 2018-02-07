import { NgModule } from '@angular/core';
import { TestService } from './test-service/test-service';
import { AuthService } from './auth/auth.service';


@NgModule({
  providers: [
    TestService,
    AuthService
  ],
})
export class ServicesModule { }
