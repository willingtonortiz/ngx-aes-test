import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { ActionHandler, ActionsHandler, AesEventBus } from 'ngx-aes';

import { SessionStore } from '../../state';
import { LoginFailed, UserLoggedIn } from '../events';
import { LoginUser } from './login-user.action';
import { LoginService } from '../../infrastructure';

@Injectable()
@ActionsHandler(LoginUser)
export class LoginUserHandler implements ActionHandler<LoginUser> {
  constructor(
    private readonly eventBus: AesEventBus,
    private readonly sessionStore: SessionStore,
    private readonly loginService: LoginService
  ) {}

  async execute({ username, password }: LoginUser): Promise<any> {
    this.sessionStore.setLoading(true);

    this.loginService
      .login({ username, password })
      .pipe(finalize(() => this.sessionStore.setLoading(false)))
      .subscribe({
        next: ({ token }) => this.eventBus.publish(new UserLoggedIn(token)),
        error: (error) => this.eventBus.publish(new LoginFailed(error.message)),
      });
  }
}
