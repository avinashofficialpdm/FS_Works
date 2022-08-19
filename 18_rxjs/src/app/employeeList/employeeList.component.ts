import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { EmpModel } from '../empModel';
import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private serv:EmployeesService) { }

  employees: EmpModel[] = []
  ngOnInit() {
    // this.serv.getEmps().subscribe(data=>{this.employees=data})
    this.serv.getEmps().subscribe({
      next(data){console.log(data);},
      error(err){console.log(err);},
      complete(){console.log("Success");
      }
    })
  }

}
