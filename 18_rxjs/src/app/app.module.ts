import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { EmployeeDetailsComponent } from './employeeDetails/employeeDetails.component';

@NgModule({
  declarations: [		
    AppComponent,
      EmployeeListComponent,
      EmployeeDetailsComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
