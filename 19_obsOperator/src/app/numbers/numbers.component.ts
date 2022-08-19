import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  array: number[] = [1, 2, 3, 4, 5]
  newArray: number[] = []
  constructor() { }

  ngOnInit() {
    this.transformedObs.subscribe((val) => { this.newArray.push(val) })
  }

  myObservable = of(1, 2, 3, 4, 5)
  // transformedObs = this.myObservable.pipe(map((val)=>{return val**2}))
  transformedObs = this.myObservable.pipe(filter(val => val > 2),map((val)=>{return val+1}))

}
