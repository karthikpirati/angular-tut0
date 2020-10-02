import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  /*
  Structural directives—change the DOM layout by adding and removing DOM elements.
  There are three predefines structural directives in Angular

  1) ngIf (adds and removes the element) 
  2) ngFor (adds and removes the elements) 
  3) ngSwitch (adds and removes the elements)

  */

  constructor() { }

  ngOnInit(): void {
  }

  //user roles 
 // change this values
  isAdmin : boolean = true;
  isUser : boolean = true;
  isSupport : boolean;


  courseForm : any = {
    'id': 0,
    'course': ''
  }

  courses : string[] =[
   // "java8",'Spring Boot','Hibernate','Angular'
  ]

  coursesWithIds : Course[] = [];

  selectedCourseId:number;
  selectedCourse:Course;

  save(){
    this.courseForm['id']=this.coursesWithIds.length+1;
    this.coursesWithIds.push({...this.courseForm});
    this.courses.push(this.courseForm['course']);
    console.log(this.coursesWithIds)
  }

  onCourseChange(){
    // value we got from UI
    // value we bind using ngModel
    console.log(this.selectedCourseId);
    this.coursesWithIds.forEach(course=>{
      if(course['id']==this.selectedCourseId){
        this.selectedCourse=course;
      }
    })
  }

  onCourseClick(courseId){
    console.log(courseId);
  }

}
