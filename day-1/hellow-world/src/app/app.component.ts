import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hellow-world';

  onChange(e:any){
    console.log("changes appeared :",e);
  }
}
