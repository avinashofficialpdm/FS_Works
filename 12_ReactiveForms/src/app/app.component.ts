import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = '12_ReactiveForms';

//   constructor(private fb:FormBuilder){}
//   regForm = this.fb.group({
//     userName:['',[Validators.required]],
//     password:[''],
//     confirmPassword:['']
//   })
// }

export class AppComponent {
  title = '12_ReactiveForms';

  constructor(){}
  regForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  })


  get userName(){
    
    return this.regForm.get('user')
  }
}