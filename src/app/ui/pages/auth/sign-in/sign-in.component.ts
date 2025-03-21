import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputThemeSelectorComponent } from '@molecules/input-theme-selector/input-theme-selector.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [InputThemeSelectorComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {}
