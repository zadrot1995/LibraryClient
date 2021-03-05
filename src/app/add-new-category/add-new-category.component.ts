import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../../Models/Book';
import {Category} from '../../Models/Category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {

  category = new Category();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createCategory(){

    const body = {
      Name: this.category.name};
    this.http.post<Category>('https://localhost:44339/api/categories', {Name: this.category.name}, httpOptions).subscribe();
    console.log(body);
    window.location.href = '';
  }
}
