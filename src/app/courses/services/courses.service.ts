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
  private readonly url_addCurso = '/add';
  private readonly url_editCurso = '/edit';

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get<Course[]>(this.urlApi)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }

  getCourse(id: string) {
    return this.httpClient.get<Course>(`${this.urlApi + this.url_editCurso}/${id}`);
  }

  addCourse(request: Partial<Course>) {
    return this.httpClient.post<MessageResponse>(this.urlApi + this.url_addCurso, request);
  }

}
