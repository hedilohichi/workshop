import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {AuthenticateComponent} from './authenticate/authenticate.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AuthenticateComponent,
    ForgotPasswordComponent
  ]
})
export class LoginModule {
}
