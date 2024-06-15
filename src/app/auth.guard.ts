import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const valorLogged = authService.isLogget()
  if (!!valorLogged){
  return true;
  }

  router.navigate(["login"],
  {queryParams: {blockedPage : state.url}})
  return false;
};
