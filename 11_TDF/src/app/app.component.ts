import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`input.ng-invalid{border-left:5px solid red}`,`input.ng-valid{border-left:5px solid green}`,`input.ng-untouched{border-left:5px solid green}`]
})
export class AppComponent {
  title = 'TDF';

  

  topics:string[]=["React","Angular","Vue"]
  userModel = new User("","avinash@gmail.com",9283733,"React","Morning",false)

  constructor(private onroll:EnrollmentService){

  }

 
  
  onSubmit(){
    this.onroll.enroll(this.userModel).subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);
      })
    
  }
}
