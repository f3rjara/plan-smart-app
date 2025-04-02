import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthUseCase } from '@domain/auth/usecases/auth.usecase.service';

export const redirectIfAuthenticatedGuard: CanActivateFn = () => {
  const _authUseCase = inject(AuthUseCase);
  const _router = inject(Router);

  const isAuthenticated = _authUseCase.getAuthStatus();

  if (isAuthenticated()) {
    _router.navigate(['/inicio']);
    return false;
  }

  return true;
};
