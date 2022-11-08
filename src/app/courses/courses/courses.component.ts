import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {
      _id : '1',
      name : 'Curso 1',
      category : 'Categoria 1'
    },
    {
      _id : '2',
      name : 'Curso 2',
      category : 'Categoria 2'
    },
    {
      _id : '3',
      name : 'Curso 3',
      category : 'Categoria 3'
    }
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() {
    //this.courses = [];
  }

  ngOnInit(): void {
  }

}
