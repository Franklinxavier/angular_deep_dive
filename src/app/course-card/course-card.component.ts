import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Event in course card component - CHILD");
    this.courseEmitter.emit(this.course);
  }
}
