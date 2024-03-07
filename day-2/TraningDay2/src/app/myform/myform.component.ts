import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

   paymentMethods = [{type: 1, name:"COD"},
   {type: 2, name:"CARD"},
   {type: 3, name:"PAY LATER"}]

   titles = [{type: 1, name:"Mr."},{type: 2, name:"Mrs"}];

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(name:any){
    // console.log(name);
    
  }

  onCommentChange(){
  }

  submit(form:any){
    console.log(form);
  }

}
