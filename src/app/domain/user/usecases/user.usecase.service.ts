import { Injectable } from '@angular/core';
import { UserGateway } from '../gateways/user.gateway';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserUsecase {
  constructor(private readonly _userGateway: UserGateway) {}

  getUser() {
    return this._userGateway.getUser();
  }

  saveUser(user: User) {
    this._userGateway.saveUser(user);
  }

  removeUser() {
    this._userGateway.removeUser();
  }
}
