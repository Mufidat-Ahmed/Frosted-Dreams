import { Info } from './Info';

export class CartItems {
  constructor(public bake:Info){
    this.price = bake.price;
  }
    quantity:number = 1;
    price:number;
  }