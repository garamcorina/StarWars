import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Species } from '../species';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fetchedData: Species[] = [];
  displayedData: Species[] = [];
  page = 1;
  nextPage!: string;
  previousPage!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData(`https://swapi.py4e.com/api/species/`);
  }

  fetchData(url:string): void {
    const dataObject$ = this.http.get(url);
    dataObject$.subscribe((data: any) => {
      this.displayedData = data.results;
      this.nextPage = data.next;
      this.previousPage = data.previous;
    });
  }


  onNextPage() {
    this.fetchData(this.nextPage)
  }
  onPreviousPage(){
    this.fetchData(this.previousPage)
  }

}
