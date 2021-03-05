import { Component, OnInit } from '@angular/core';
import {Book} from '../../Models/Book';
import {Category} from '../../Models/Category';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  categories: Category[];
  deletedCategory: Category;

  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44339/api/categories').subscribe((data: Category[]) => this.categories = data);
  }
  deleteCategory(id: number): void{
    const result = this.http.delete('https://localhost:44339/api/categories/' + id)
      .subscribe((data: Category) => this.deletedCategory = data);
    console.log(result);
    console.log(this.deletedCategory);

    window.location.reload();
  }
}
