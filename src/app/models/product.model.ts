export class Product {

  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;


  constructor(id: number, name: string, price: number, amount: number, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.description = description;
  }
}
