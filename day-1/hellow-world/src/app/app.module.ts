import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import {FormsModule } from "@angular/forms"
import {SunneryPipe} from "./sunnery.pipe";
import { PropComponent } from './prop/prop.component';
import { PanelComponent } from './panel/panel.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SunneryPipe, 
    PropComponent, PanelComponent, SwitchCaseComponent, NgClassExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
