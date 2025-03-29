import { Observable } from 'rxjs';
import { Signal } from '@angular/core';

export abstract class AuthGateway {
  abstract login(username: string, phoneNumber: string): Observable<boolean>;
  abstract logout(): void;
  abstract getAuthStatus(): Signal<boolean>;
  abstract getLoadingStatus(): Signal<boolean>;
}
