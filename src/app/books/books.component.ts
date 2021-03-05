import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../Models/Book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../Models/Category';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() id: number;
  category = new Category();
  deletedBook: Book;
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient,
              // tslint:disable-next-line:variable-name
              private _router: Router,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.http.get('https://localhost:44339/api/categories/' + this.id)
      .subscribe((data: Category) => {
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Methods', '*');
        this.category = data;
      });
  }
  deleteBook(id: number): void{
    // api/Books/5
    const result = this.http.delete('https://localhost:44339/api/Books/' + id).subscribe((data: Book) => this.deletedBook = data);
    console.log(this.deletedBook);
    console.log(result);
    console.log('https://localhost:44339/api/Books/' + id);
    window.location.reload();
  }

}
