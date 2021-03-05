import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BookPageComponent } from './book-page/book-page.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import {FormsModule} from '@angular/forms';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';


const routes = [
  {path: '', component: CategoriesPageComponent},
  { path: 'books/:id/book/:id', component: BookPageComponent},
  { path: 'addNewBook', component: AddNewBookComponent},
  { path: 'addNewCategory', component: AddNewCategoryComponent},
  { path: 'books/:id', component: BooksComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookPageComponent,
    AddNewBookComponent,
    CategoriesPageComponent,
    AddNewCategoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PdfViewerModule,
    FormsModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
