import {Book} from './Book';

export class Category{
  id: number;
  name: string;
  books: Book[];
  constructor() {
    this.id = 0;
    this.name = '';
    // tslint:disable-next-line:new-parens
    this.books = null;
  }
}
