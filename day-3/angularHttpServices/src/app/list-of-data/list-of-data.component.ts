import { Component, OnInit } from '@angular/core';
import { ListOfDataService } from '../allServices/list-of-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of-data',
  templateUrl: './list-of-data.component.html',
  styleUrls: ['./list-of-data.component.css']
})
export class ListOfDataComponent implements OnInit {


  apiResponse: any = [];

  constructor(private service: ListOfDataService, private router: ActivatedRoute) {


  }

  ngOnInit(): void {

    this.router.queryParamMap.subscribe( resp => {
      console.log(resp.get('id'));
      
      let qp = resp.get('')
    })
    this.getTitle()
  }
  getTitle() {
    this.service.getTitles().subscribe(
      response => {
      this.apiResponse = response
    }, 
    (error: Response) => {
      if (error.status === 404) {
        alert('this post is already removed')
      }
      else {
        alert('An unexpected error.')
        console.log(error)
      }
    })
  }



  postTitle(title: any) {
    this.service.postTitle(title).subscribe(response => {

    }, (error: Response) => {
      if (error.status === 404) {
        alert('this post is already removed')
      }
      else {
        alert('An unexpected error.')
        console.log(error)
      }
    })
  }


  onUpdate(eachTitle: any) {
    this.service.onUpdate(eachTitle).subscribe(response => {

    }, (error: Response) => {
      if (error.status === 404) {
        alert('this post is already removed')
      }
      else {
        alert('An unexpected error.')
        console.log(error)
      }
    })
  }


  onRemove(id: any) {
    this.service.onRemove(4684).subscribe(response => {
      console.log(response);

    }, (error: Response) => {
      if (error.status === 404) {
        alert('this post is already removed')
      }
      else {
        alert('An unexpected error.')
        console.log(error)
      }
    })
  }



}
