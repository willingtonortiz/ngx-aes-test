import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventHandler, EventsHandler } from 'ngx-aes';

import { UserLoggedIn } from './user-logged-in.event';

@Injectable()
@EventsHandler(UserLoggedIn)
export class UserLoggedInHandler implements EventHandler<UserLoggedIn> {
  constructor(private readonly snakbar: MatSnackBar) {}

  handle(event: UserLoggedIn) {
    this.snakbar.open(`Sesión iniciada, Token ${event.token}`, 'Cerrar');
  }
}
