import { Component } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '26_resolve_guard';
  constructor(private serv: MainService, private _http: HttpClient) { }

  students: any[] = []

  myFunc() {
    this._http.get("http://localhost:3000/comments").subscribe((res: any) => {
      this.students = res
      console.log(this.students);

    })
  }

  // test for date sort
  objectList = [
    {
      name: "Avinash",
      age: 21,
      dob: new Date()
    },
    {
      name: "akhil",
      age: 23,
      dob: new Date()
    }
  ]



  ngOnInit(): void {
    this.myFunc()




    this.objectList.sort(function (a, b) {

      let key1 = new Date(a.dob);
      let key2 = new Date(b.dob);
      if (key1 < key2) {
        return -1
      } else if (key1 == key2) {
        return 0;
      } else {
        return 1;
      }
    })

    console.log(this.objectList);
    
  }
}
