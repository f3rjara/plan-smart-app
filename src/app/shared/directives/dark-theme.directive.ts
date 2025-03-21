import { Directive, HostBinding, inject } from '@angular/core';
import { computed } from '@angular/core';
import { ThemeUiService } from '@core/services/theme/theme-ui.service';
import { ThemeMode } from '../interfaces/theme-ui.interface';

/**
 * @description Permite agregar la clase 'dark' al elemento, dependiendo del tema actual en la App
 */
@Directive({
  selector: '[appDarkTheme]',
  standalone: true,
})
export class DarkThemeDirective {
  private readonly themeUiService = inject(ThemeUiService);

  private isDarkMode = computed(() => this.themeUiService.themeMode() === ThemeMode.D);

  @HostBinding('class.dark') get darkModeClass() {
    return this.isDarkMode();
  }
}
