import {Component, OnInit} from '@angular/core';
import {Category} from '../../Models/Category';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../../Models/Book';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})


export class AddNewBookComponent implements OnInit{

  categories: Category[];
  book = new Book();
  selectedValue: number;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44339/api/categories').subscribe((data: Category[]) => this.categories = data);
  }

  chooseCategory(id: number): void{
    this.book.categoryId = id;
    console.log(id);
  }

  // tslint:disable-next-line:typedef
  createBook(){
    // const body = {
    //   Name: 'aaa',
    //   Author: 'aaa',
    //   Href: 'qwe',
    //   Category: 1,
    //   CategoryId: 1};

    const body = {
      Name: this.book.name,
      Author: this.book.author,
      Href: this.book.href,
      Category: this.book.categoryId,
      CategoryId: this.book.categoryId};
    this.http.post<Book>('https://localhost:44339/api/books', body, httpOptions).subscribe();
    console.log(body);
    window.location.href = '';

  }
}
