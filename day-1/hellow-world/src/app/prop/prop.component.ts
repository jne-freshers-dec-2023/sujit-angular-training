import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {

  @Input() isBackground = false;
  @Output() change = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  changeColor(){
    this.isBackground = !this.isBackground
    this.change.emit(this.isBackground)
  }

}
