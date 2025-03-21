import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-design-cards',
  standalone: true,
  imports: [],
  templateUrl: './design-cards.component.html',
  styleUrl: './design-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignCardsComponent { }
