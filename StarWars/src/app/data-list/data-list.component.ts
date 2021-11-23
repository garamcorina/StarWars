import { Component, Input, OnInit } from '@angular/core';
import { Species } from 'src/species';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataListComponent implements OnInit {
  @Input() postsData: Species[] = [];

  constructor() {}

  ngOnInit(): void {}
}
