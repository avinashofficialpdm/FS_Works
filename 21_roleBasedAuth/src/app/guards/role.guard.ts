import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorised(route);
  }

  private isAuthorised(route:ActivatedRouteSnapshot):boolean{
    const roles = ["student"]
    const expectedRoles = route.data['expectedRoles'];
    const matchRoles = roles.findIndex(role=>expectedRoles.indexOf(role)!==-1)
    return  matchRoles>=0?true:false
  }
  
}
