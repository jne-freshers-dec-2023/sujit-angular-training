import { Component } from "@angular/core";
import {CoursesService} from "./courses.service"


@Component({
    selector: 'courses', 
    template: `
    <h2>{{ title }}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    <img [attr.src] = "imageUrl">
    <br>
    <br>
    <form>
    <input [type] = "text1" [placeholder] ="placeholder" >
    </form>
    <br>
    <br>

    <div [id]= "divId"  [style] = "myStyle"  [style.backgroundColor] = "isDivStyle ? 'blue' : 'red'">
    
    </div>
    <h2 [textContent]="h2Content"></h2>
    <br>
    <p [innerText]="h2Content"></p>

    <div (click) ="onOutterClick($event)">
    <button class ="btn btn-primary"  [class.active] = "isActive" (click)="onclick($event)">click me!</button>
    </div>

    <input type="text" (keydown.enter) ="onDivClicked()" ><br>
    <br>

    <label>Name: </label>

    <input type="text" #name (keyup.enter) ="onNameEnter(name.value)" ><br><br>


    <label>email: </label>

    <input type="email" [(ngModel)]= 'email' (keyup.enter) ="onEmailEntered()" ><br><br>

    <p> {{ description | summary }}</p>
    `
})
export class CoursesComponent {

    title = "list of components"
    courses;

    email:any;
    description = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    isActive = true;
    isDivStyle = true;
    h2Content = "sujit mohapatra"
    text1 = "password"
    myStyle = "border:2px solid red; height:200px; width:200px";
    divId= "myDiv1"
    placeholder = "sujit"
    imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"

    constructor(private service:CoursesService){
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    onclick($event:any){
        $event.stopPropagation();
        console.log("click event => ",$event);
        
    }
    onOutterClick(e:any){
        console.log("parent div clicked"); 
    }
    onDivClicked(){
        console.log("enter key pressed")
    }
    onNameEnter(name:any){
        console.log("name: ",name);
    }
    onEmailEntered(){
        console.log("email: ",this.email);
    }



}