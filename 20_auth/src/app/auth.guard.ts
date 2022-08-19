import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MyServiceService } from './my-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private rout: Router, private serv: MyServiceService) { }

  canActivate(): boolean {
    if (this.serv.isLoggedIn()) {
      return true
    } else {
      alert("Please login")
      this.rout.navigate(['/login'])
      return false
    }
  }
}
