import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListOfDataService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }


  getTitles() {
    return this.http.get(this.apiUrl)
  }

  postTitle(title: any) {
    return this.http.post(this.apiUrl + '/', title.value)
  }

  onUpdate(eachTitle: any) {
    return this.http.put(this.apiUrl + '/' + eachTitle.id, eachTitle)
  }

  onRemove(id: any) {
    return this.http.delete(this.apiUrl + '/' + id).pipe(
      catchError(
        error => {
          console.error('An error occurred:', error);
          return throwError('Something went wrong');
        }
      ))
  }
}
