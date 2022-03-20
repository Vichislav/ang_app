import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";


@Injectable({
  providedIn: 'root'
})
export class productService {

  getProduct(): Product[] {
    return [
      new Product ('Roller', 25, 2, 'cardboard box 20x20x10' ),
      new Product ('Сorner', 5, 10, 'tied with a rope' ),
    ];
  }

  constructor() { }
}
