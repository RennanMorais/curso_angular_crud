import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'crud-angular-api/cursos';

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(courses => console.log(courses))
    );
  }
}
