import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AesActionBus } from 'ngx-aes';

import { LoginUser } from '../../../application';
import { SessionQuery } from '../../../state';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;
  isLoading$ = this.sessionQuery.isLoading$;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly actionBus: AesActionBus,
    private readonly sessionQuery: SessionQuery
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.form.invalid) {
      return;
    }

    const { username, password } = this.form.value;
    this.actionBus.execute(new LoginUser(username!, password!));
  }

  get fUsername() {
    return this.form.get('username');
  }

  get fPassword() {
    return this.form.get('password');
  }
}
