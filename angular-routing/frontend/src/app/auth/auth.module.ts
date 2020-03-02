import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { PrivateTaskComponent } from './private-task/private-task.component';
import { PublicTaskComponent } from './public-task/public-task.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    SinginComponent, 
    SingupComponent, 
    PrivateTaskComponent, 
    PublicTaskComponent, LoginComponent, AdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SinginComponent, 
    SingupComponent, 
    PrivateTaskComponent, 
    PublicTaskComponent,
    LoginComponent,
    AdminComponent
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
