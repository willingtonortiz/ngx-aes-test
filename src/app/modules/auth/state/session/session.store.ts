import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  token: string;
  isLoading: boolean;
}

const createInitialState = (): SessionState => ({
  token: '',
  isLoading: false,
});

@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
