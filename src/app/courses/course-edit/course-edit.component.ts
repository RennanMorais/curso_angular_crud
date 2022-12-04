import { MessageResponse } from './../model/message-response';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent {

  form = this.formBuilder.group({
    _id: [''],
    curso: [''],
    categoria: ['']
  });

  constructor(
    private courseService: CoursesService,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['curso'];
    this.form.setValue({
      _id: course._id,
      curso: course.curso,
      categoria: course.categoria
    });
  }

  onSubmit() {
    this.courseService.addCourse(this.form.value)
    .subscribe(response => this.onSuccess(response), erro => this.onError());
    this.router.navigate([''], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate([''], {relativeTo: this.route});
  }

  onSuccess(serviceResonse: MessageResponse) {
    this.snackBar.open(serviceResonse.mensagem, '', { duration: 3000 });
  }

  onError() {
    this.snackBar.open('Falha ao salvar o curso.', '', { duration: 3000 });
  }

}
