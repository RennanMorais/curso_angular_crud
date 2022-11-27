import { Course } from '../../model/course';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  readonly displayedColumns: string[] = ['curso', 'categoria', 'acoes'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit() {
    this.edit.emit(true);
  }

}
