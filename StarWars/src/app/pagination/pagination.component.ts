import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() hasNext!: boolean;
  @Input() hasPrevious!: boolean;
  @Output() onNext: EventEmitter<number> = new EventEmitter<number>();
  @Output() onPrevious: EventEmitter<number> = new EventEmitter<number>();
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {}

  onNextPage(): void {
    this.currentPage += 1;
    this.onNext.emit();
  }

  onPreviousPage(): void {
    this.currentPage -= 1;
    this.onPrevious.emit();
  }
}
