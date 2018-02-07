import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
