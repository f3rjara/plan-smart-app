import { EnvironmentProviders, Provider } from '@angular/core';

import { AuthGateway } from '@domain/auth/gateways/auth.gateway';
import { AuthService } from '@infra/driven-adapters/auth/auth.service';

import { UserGateway } from '@domain/user/gateways/user.gateway';
import { UserService } from '@infra/driven-adapters/user/user.service';

export const INFRAESTRUCTURE_PROVIDERS: (Provider | EnvironmentProviders)[] = [
  { provide: AuthGateway, useClass: AuthService },
  { provide: UserGateway, useClass: UserService },
];
