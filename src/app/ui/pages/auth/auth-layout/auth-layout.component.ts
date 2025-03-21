import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignCardsComponent } from '@templates/design-cards/design-cards.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [DesignCardsComponent, RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}
