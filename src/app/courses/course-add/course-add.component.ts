import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {

  form: FormGroup;

  constructor(
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.form = this.formBuilder.group({
      curso: [null],
      categoria: [null]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.courseService.addCourse(this.form.value)
    .subscribe(response => this._snackBar.open(response.mensagem),
      erro => this._snackBar.open("Erro ao salvar o curso."));
    this.router.navigate([''], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate([''], {relativeTo: this.route});
  }
}
