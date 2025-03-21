import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../home/layout/home-layout.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HomeLayoutComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {}
