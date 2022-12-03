import { MessageResponse } from './../../model/message-response';
import { delay } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { Component, Pipe } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {

  form = this.formBuilder.group({
    curso: [''],
    categoria: ['']
  });

  constructor(
    private courseService: CoursesService,
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

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
