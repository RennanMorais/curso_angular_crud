import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Course[] {
    return [
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
      },
      {
        _id : '4',
        name : 'Curso 4',
        category : 'Categoria 4'
      },
      {
        _id : '5',
        name : 'Curso 5',
        category : 'Categoria 5'
      }
    ];
  }
}
