import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { EmpModel } from '../empModel';

@Component({
  selector: 'app-employeeDetails',
  templateUrl: './employeeDetails.component.html',
  styleUrls: ['./employeeDetails.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private serv:EmployeesService) { }
  employees:EmpModel[]=[]

  ngOnInit() {
    this.serv.getEmps().subscribe(data=>{this.employees=data})
  }

}
