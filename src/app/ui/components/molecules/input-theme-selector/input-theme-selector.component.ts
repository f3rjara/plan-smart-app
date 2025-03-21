import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import { ThemeUiService } from '@core/services/theme/theme-ui.service';
import { ThemeMode } from '@interfaces/theme-ui.interface';

@Component({
  selector: 'app-input-theme-selector',
  standalone: true,
  imports: [ButtonModule, Tooltip],
  templateUrl: './input-theme-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputThemeSelectorComponent {
  private readonly themeUiService = inject(ThemeUiService);
  isDarkMode = computed(() => this.themeUiService.themeMode() === ThemeMode.D);
  iconMode = computed(() => (this.isDarkMode() ? 'pi pi-sun' : 'pi pi-moon'));

  changeTheme() {
    this.themeUiService.toggleTheme();
  }
}
