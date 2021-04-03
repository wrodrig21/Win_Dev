import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  //@Input decorator allows a parent to update a date in the child.
  // in this case, we'll be giving a Student to our Student-Detail component.
  @Input() student?: Student;

  constructor() { }

  ngOnInit(): void {
  }

}