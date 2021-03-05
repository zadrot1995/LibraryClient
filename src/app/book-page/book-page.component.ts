import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../Models/Book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  @Input() id: number;
  book = new Book();
  constructor(private http: HttpClient,
              // tslint:disable-next-line:variable-name
              private _router: Router,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.http.get('https://localhost:44339/api/books/' + this.id)
      .subscribe((data: Book) => {
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Methods', '*');
        this.book = data;
      });
    // this.src = this.book.href;
  }

}
