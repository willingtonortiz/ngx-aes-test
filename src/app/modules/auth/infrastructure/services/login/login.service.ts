import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { v4 } from '@lukeed/uuid';

@Injectable({ providedIn: 'root' })
export class LoginService {
  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Observable<{ token: string }> {
    return timer(2000).pipe(
      map(() => {
        if (username === 'theadmin' && password === '123456') {
          return { token: v4() };
        }

        throw new Error('Invalid credentials');
      })
    );
  }
}
