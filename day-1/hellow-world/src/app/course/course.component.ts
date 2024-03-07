import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses = [55,35]


  courseDetails = [
    {name:'course1' , price: 1520},
    {name:'course2' , price: 96},
    {name:'course3' , price: 375},
  ]



  constructor() { }

  ngOnInit(): void {
  }

  addElement(){
    console.log("ADD EXECUTED")
    this.courseDetails.push({name:'course4' , price: 400});
  }
  revoveElement(course:any){
    let index = this.courseDetails.indexOf(course)
    this.courseDetails.splice(index,1)
  }

}
