import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  students: any[] = []

  constructor(private _route: ActivatedRoute) {
    this.students = this._route.snapshot.data['studentList']
   }

  ngOnInit(): void {}
    
}
