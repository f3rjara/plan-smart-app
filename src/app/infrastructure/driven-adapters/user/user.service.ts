import { Injectable, Signal, signal } from '@angular/core';
import { UserGateway } from '@domain/user/gateways/user.gateway';
import { User } from '@domain/user/models/user.model';
import { STORE_USER_ID } from '@shared/constants/auth.constants';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserGateway {
  protected user = signal<User | null>(null);

  constructor() {
    this.restoreUser();
  }

  restoreUser() {
    const storedUser = sessionStorage.getItem(STORE_USER_ID);
    if (storedUser) {
      this.user.set(JSON.parse(storedUser));
    }
  }

  getUser(): Signal<User | null> {
    return this.user;
  }

  saveUser(user: User): void {
    sessionStorage.setItem(STORE_USER_ID, JSON.stringify(user));
    this.user.set(user);
  }

  removeUser(): void {
    sessionStorage.removeItem(STORE_USER_ID);
    this.user.set(null);
  }
}
