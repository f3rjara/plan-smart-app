import { APP_INITIALIZER, EnvironmentProviders, LOCALE_ID, Provider } from '@angular/core';
import { ThemeUiService } from '../core/services/theme/theme-ui.service';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

const APP_SERVICES = [ThemeUiService];

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
  ...APP_SERVICES,
  { provide: LOCALE_ID, useValue: 'es-CO' },
  {
    provide: APP_INITIALIZER,
    useFactory: initializeTheme,
    deps: [ThemeUiService],
    multi: true,
  },
  providePrimeNG({
    ripple: true,
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: '.dark',
      },
    },
  }),
];

function initializeTheme(darkModeService: ThemeUiService) {
  return () => darkModeService.initializeTheme();
}
