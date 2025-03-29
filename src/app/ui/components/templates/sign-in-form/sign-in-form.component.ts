import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { InputMask } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { AuthUseCase } from '@domain/auth/usecases/auth.usecase.service';
import { UserUsecase } from '@domain/user/usecases/user.usecase.service';
import { NAME_PATTERN } from '@shared/constants/validators.constants';
import { Router } from '@angular/router';

const PRIME_COMPONENTS = [InputTextModule, InputMask, ButtonModule];

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [...PRIME_COMPONENTS, ReactiveFormsModule, TitleCasePipe],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent {
  private readonly _authUseCase = inject(AuthUseCase);
  private readonly _userUseCase = inject(UserUsecase);
  private readonly _router = inject(Router);

  isAuthenticated = this._authUseCase.getAuthStatus();
  isLoading = this._authUseCase.getLoadingStatus();

  signInForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(NAME_PATTERN),
      ],
    }),
    phoneNumber: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  get username() {
    return this.signInForm.get('username');
  }

  get phoneNumber() {
    return this.signInForm.get('phoneNumber');
  }

  onSubmit(): void {
    if (this.signInForm.invalid) return;

    const username = this.signInForm.controls.username.value;
    const phoneNumber = this.signInForm.controls.phoneNumber.value;

    this._authUseCase.login(username, phoneNumber).subscribe((success) => {
      if (success) {
        const user = { name: username.toLowerCase(), whatsapp: phoneNumber };
        this._userUseCase.saveUser(user);
        this._router.navigate(['/inicio']);
      }
    });
  }
}
