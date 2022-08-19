import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpModel } from './empModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _http: HttpClient) { }

  getEmps(): Observable<EmpModel[]> {
    return this._http.get<EmpModel[]>("/assets/employees.json")
  }
}
