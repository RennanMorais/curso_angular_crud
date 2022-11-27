import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseAddComponent } from './containers/course-add/course-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './containers/courses/courses.component';

const routes: Routes = [
  {
    path:'',
    component: CoursesComponent
  },
  {
    path:'add',
    component: CourseAddComponent
  },
  {
    path:'edit',
    component: CourseEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
