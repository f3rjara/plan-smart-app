import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente para el layout de la aplicación
 * @export
 * @class LayoutComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
