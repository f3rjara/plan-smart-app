import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { CardModule } from 'primeng/card';

import { InputThemeSelectorComponent } from '@molecules/input-theme-selector/input-theme-selector.component';
import { SignInFormComponent } from '@templates/sign-in-form/sign-in-form.component';

const PRIME_COMPONENTS = [CardModule];

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [...PRIME_COMPONENTS, InputThemeSelectorComponent, SignInFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {}
