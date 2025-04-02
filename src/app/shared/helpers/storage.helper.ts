import { signal, Signal } from '@angular/core';

export class StorageHelper {
  private static readonly SESSION_KEY = 'welcomeMessageShown';

  static shouldShowWelcomeMessage(): Signal<boolean> {
    const hasBeenShown = sessionStorage.getItem(this.SESSION_KEY) === 'true';

    if (!hasBeenShown) {
      sessionStorage.setItem(this.SESSION_KEY, 'true');
    }

    return signal(!hasBeenShown);
  }
}
