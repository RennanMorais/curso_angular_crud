import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './../model/course';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  readonly displayedColumns: string[] = ['curso', 'categoria', 'acoes'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onAdd() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  onEdit(curso: Course) {
    this.router.navigate(['edit', curso], {relativeTo: this.route});
  }
}
