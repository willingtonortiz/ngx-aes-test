import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxAesModule } from 'ngx-aes';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent, RegisterPageComponent } from './ui/pages';
import {
  LoginFailedHandler,
  LoginUserHandler,
  UserLoggedInHandler,
} from './application';
import { MaterialModule } from '../../shared/material/material.module';
import { SessionQuery, SessionStore } from './state';
import { LoginService } from './infrastructure';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgxAesModule.forFeature({
      actionHandlers: [LoginUserHandler],
      eventHandlers: [UserLoggedInHandler, LoginFailedHandler],
    }),
    MaterialModule,
  ],
  providers: [SessionStore, SessionQuery, LoginService],
  declarations: [LoginPageComponent, RegisterPageComponent],
})
export class AuthModule {}
