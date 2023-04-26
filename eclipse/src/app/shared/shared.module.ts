import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { RecovertPasswordComponent } from './auth/recovert-password/recovert-password.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';



@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    RecovertPasswordComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
