export class Product {

  name: string;
  price: number;
  amount: number;
  description: string;


  constructor(name: string, price: number, amount: number, description: string) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.description = description;
  }
}
