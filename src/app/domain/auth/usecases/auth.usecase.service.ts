import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthGateway } from '../gateways/auth.gateway';

@Injectable({
  providedIn: 'root',
})
export class AuthUseCase {
  constructor(private readonly _authGateway: AuthGateway) {}

  login(username: string, phoneNumber: string) {
    return this._authGateway.login(username, phoneNumber);
  }

  logout() {
    return this._authGateway.logout();
  }

  getAuthStatus() {
    return this._authGateway.getAuthStatus();
  }

  getLoadingStatus() {
    return this._authGateway.getLoadingStatus();
  }
}
