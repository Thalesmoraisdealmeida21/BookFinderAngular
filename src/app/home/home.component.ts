import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books } from '../interfaces/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService) { }

  search: string
  statusLoading: boolean = false
  books = []

  ngOnInit(): void {

  }

  onKeydown(event){
    if(event.key === "Enter"){
        this.searchBooks();
    }
  }

  searchBooks(){
    this.statusLoading = true;
    
    this.bookService.searchBooks(this.search).subscribe((booksFounded: Books)=>{
      this.statusLoading = false
      this.books = booksFounded.items
      console.log( this.books[0])
     
    })
    console.log("search: = " + this.search)

  }

}
