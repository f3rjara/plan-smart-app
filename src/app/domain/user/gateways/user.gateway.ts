import { Signal } from '@angular/core';
import { User } from '../models/user.model';

export abstract class UserGateway {
  abstract getUser(): Signal<User | null>;
  abstract saveUser(user: User): void;
  abstract removeUser(): void;
}
