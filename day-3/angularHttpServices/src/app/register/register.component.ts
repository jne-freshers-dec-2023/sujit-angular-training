import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(Response => {
      console.log(Response.get('user'));
      Response.get('user')
    })
  }

  onRoute(){
    this.route.navigate(['/list' , {queryParams:{id:45, name:"sumit"}}])
  }

}
