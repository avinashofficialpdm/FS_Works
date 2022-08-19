import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  @Input() public parantData:any

  @Output() emitEvent=new EventEmitter


  fireEvent(){
    this.emitEvent.emit("Welcome To Feathersoft")
  }
  ngOnInit(): void {
  }

}
