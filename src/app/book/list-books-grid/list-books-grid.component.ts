import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-books-grid',
  templateUrl: './list-books-grid.component.html',
  styleUrls: ['./list-books-grid.component.scss']
})
export class ListBooksGridComponent implements OnInit {

  constructor() { }

  @Input() books

  ngOnInit(): void {
  }

}
