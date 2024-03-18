import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Log from child element!");
    this.courseSelected.emit(this.course);
  }
}
