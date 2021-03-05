import {Category} from './Category';

export class Book{
  id: number;
  name: string;
  author: string;
  href: string;
  categoryId: number;
 // category: Category;
  constructor() {
    this.id = 0;
    this.name = '';
    this.author = '';
    this.href = '';
    this.categoryId = 0;
  //  this.category = new Category();
  }
}
