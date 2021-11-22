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
  itemsPerPage!: number;
  nrOfPages: number = 4;
  page = 1;

  constructor(private http: HttpClient) {
    while (this.page <= this.nrOfPages) {
      this.fetchData(this.page);
      this.page += 1;
    }
  }

  fetchData(pageNumber: number): void {
    const dataObject$ = this.http.get(
      `https://swapi.py4e.com/api/species/?page=${pageNumber}`
    );
    dataObject$.subscribe((data: any) => {
      if (!this.itemsPerPage) {
        this.itemsPerPage = data.results.length;
      }
      data.results.map((result: Species) => {
        this.fetchedData.push(result);
      });
      this.onPageChange();
    });
  }

  onPageChange(page: number = 1): void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.displayedData = this.fetchedData.slice(startItem, endItem);
  }
  
  // this.nrOfPages = Array.from(
  //   Array(Math.ceil(species.count / 10)),
  //   (_, i) => i
  // );
  // this.nrOfPages = Math.ceil(this.fetchedData.length / this.itemsPerPage);
}
