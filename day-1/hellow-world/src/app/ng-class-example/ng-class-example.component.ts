import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.scss']
})
export class NgClassExampleComponent implements OnInit {

  isStyle= true
  condition= true;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeButton(){
    this.condition=!this.condition;
  }

}
