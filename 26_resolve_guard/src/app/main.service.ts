import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  arr:any[]=[]
  constructor(private _http: HttpClient) { }

  getList(): any {
    this._http.get("http://localhost:3000/comments").subscribe((res:any)=>{
      this.arr=res
      
    })
    return this.arr
  }

}
