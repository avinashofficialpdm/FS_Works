import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService implements Resolve<any> {

constructor(private mainServ:MainService) { }

resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<any> | Promise<any> | any {
  console.log("fdfdfdfdf");
  
  return this.mainServ.getList()
}


}
