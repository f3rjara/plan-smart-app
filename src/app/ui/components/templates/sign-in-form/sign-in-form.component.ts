import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { InputMask } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const PRIME_COMPONENTS = [InputTextModule, InputMask, ButtonModule];

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [...PRIME_COMPONENTS, ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent {
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.signInForm.get('username');
  }

  get phoneNumber() {
    return this.signInForm.get('phoneNumber');
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Formulario enviado:', this.signInForm.value);
    } else {
      console.log('El formulario es inválido.');
    }
  }
}
