import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [
    { name: 'Product 1', price: 10, author: "Edward" },
    { name: 'Product 2', price: 20, author: "Alex" },
    { name: 'Product 3', price: 30, author: "Joe" }
  ];

  constructor() { }

  getProducts(): any[] {
    return this.products;
  }
}
