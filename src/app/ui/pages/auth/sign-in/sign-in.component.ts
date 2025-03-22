import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputThemeSelectorComponent } from '@molecules/input-theme-selector/input-theme-selector.component';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [InputThemeSelectorComponent, InputTextModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  value: string | undefined;
}
