import { CourseRequest } from './../model/course-request';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly url_getCursos = 'crud-angular-api/cursos';
  private readonly url_addCurso = 'crud-angular-api/cursos/add';

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get<Course[]>(this.url_getCursos)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }

  addCourse(request: CourseRequest) {
    return this.httpClient.post<CourseRequest>(this.url_addCurso, request);
  }

}
