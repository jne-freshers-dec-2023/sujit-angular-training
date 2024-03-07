import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  register ={id:789};

  queryParam = {id :24 , name:"sujit"}




  ngOnInit(): void {
  }

}
