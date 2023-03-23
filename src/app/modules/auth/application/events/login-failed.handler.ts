import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventHandler, EventsHandler } from 'ngx-aes';

import { LoginFailed } from './login-failed.event';

@Injectable()
@EventsHandler(LoginFailed)
export class LoginFailedHandler implements EventHandler<LoginFailed> {
  constructor(private readonly snackbar: MatSnackBar) {}

  handle(event: LoginFailed) {
    this.snackbar.open(event.reason, 'Cerrar');
  }
}
