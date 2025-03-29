import { Injectable, signal, Signal } from '@angular/core';
import { AuthGateway } from '@domain/auth/gateways/auth.gateway';
import { User } from '@domain/user/models/user.model';
import { STORE_USER_ID } from '@shared/constants/auth.constants';
import { TWO_THOUSAND } from '@shared/constants/number.constants';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthGateway {
  protected isAuthenticated = signal(false);
  protected isLoading = signal(false);

  constructor() {
    this.restoreSesion();
  }

  restoreSesion() {
    const storedUser = sessionStorage.getItem(STORE_USER_ID);
    if (!storedUser) {
      this.logout();
      return;
    }
    this.isAuthenticated.set(true);
  }

  login(username: string, phoneNumber: string): Observable<boolean> {
    this.isLoading.set(true);
    return of(true).pipe(
      delay(TWO_THOUSAND),
      tap((success) => {
        if (success) {
          this.isAuthenticated.set(true);
        }
        this.isLoading.set(false);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(STORE_USER_ID);
    this.isAuthenticated.set(false);
  }

  getAuthStatus(): Signal<boolean> {
    return this.isAuthenticated;
  }

  getLoadingStatus(): Signal<boolean> {
    return this.isLoading;
  }
}
