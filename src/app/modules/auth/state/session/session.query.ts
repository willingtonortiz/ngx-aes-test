import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { SessionState, SessionStore } from './session.store';

@Injectable()
export class SessionQuery extends Query<SessionState> {
  isLoading$ = this.selectLoading();

  constructor(protected override store: SessionStore) {
    super(store);
  }
}
