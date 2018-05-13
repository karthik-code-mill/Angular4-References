import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-course-creation',
  templateUrl: './course-creation.component.html',
  styleUrls: ['./course-creation.component.css']
})
export class CourseCreationComponent implements OnInit {
  courseCategoryList;
  constructor() {
    this.courseCategoryList=[
      {id:1,name:'Art'},
      {id:2,name:'Technology'}
    ];

   }

  ngOnInit() {
  }

  cCreationSubmit(f:FormControl){
    console.log(f);    
  }
  logMe(x){
    console.log(x);
  }
}
