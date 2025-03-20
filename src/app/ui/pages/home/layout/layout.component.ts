import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ThemeUiService } from '@core/services/theme/theme-ui.service';
import { ThemeMode } from '@interfaces/theme-ui.interface';

/**
 * Componente para el layout de la aplicación
 * @export
 * @class LayoutComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  private readonly themeUiService = inject(ThemeUiService);
  isDarkMode = computed(() => this.themeUiService.themeMode() === ThemeMode.D);
  iconMode = computed(() => (this.isDarkMode() ? 'pi pi-moon' : 'pi pi-sun'));

  changeTheme() {
    this.themeUiService.toggleTheme();
  }
}
