import { Component } from '@angular/core';
import {Product} from "../models/product.model";
import {productService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'Склад';

  id: number = 0;
  name: string = '';
  price: number = 0;
  amount: number = 0;
  description: string = '';

  products: Product[] = [];

  constructor(private productService: productService) {
    this.products = this.productService.getProduct();
  }
  addProduct(): void {
    this.products.push(new Product(this.id, this.name, this.price, this.amount, this.description))
    this.clearProduct()
    console.log('push product work')
  }
  deleteProduct(): void {
    let counter: number = this.id;
    this.products.splice(counter,1);
  }
  clearProduct(): void {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.amount = 0;
    this.description = '';
  }

}
