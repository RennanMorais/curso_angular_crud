import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course> {

  constructor(private service: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    if(route.params && route.params['id']) {
      return this.service.getCourse(route.params['id']);
    }
    return of({_id: '', curso: '', categoria: ''});
  }
}
