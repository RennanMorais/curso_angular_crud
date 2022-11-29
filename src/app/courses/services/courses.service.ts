import { MessageResponse } from './../model/message-response';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly urlApi = 'crud-angular-api/cursos';
  private readonly url_getCursos = '';
  private readonly url_addCurso = '/add';

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get<Course[]>(this.urlApi+this.url_getCursos)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }

  getCourse(id: string) {
    return this.httpClient.get<Course>(`${this.urlApi}/${id}`);
  }

  addCourse(request: Partial<Course>) {
    return this.httpClient.post<MessageResponse>(this.urlApi + this.url_addCurso, request);
  }

}
