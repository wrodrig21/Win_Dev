import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
// import { FormsModule } from '@angular/forms';

import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;

  selectedStudent?: Students;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(student: Students): void {
    this.selectedStudent = student;
  }
}
