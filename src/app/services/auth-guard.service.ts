import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService : AuthenticationService, private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot){
    // if(this.authService.isAuthenticated){
    //   return true;
    // }
    // return this.router.navigate(['/login']);
    return true
  }
}
