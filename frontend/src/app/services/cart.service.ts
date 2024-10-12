import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { Info } from '../shared/models/Info';
import { CartItems } from '../shared/models/CartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(bake:Info):void{
   let cartItem = this.cart.items.find(item => item.bake.id === bake.id);
   if (cartItem)
    return;
  
   this.cart.items.push(new CartItems(bake));
   this.setCartToLocalStorage();
  }

  removeFromCart(bake:Info):void{
    this.cart.items = this.cart.items.filter(item => item.bake.id != bake.id);
    this.setCartToLocalStorage();
  }

  changeQuantity(bake:Info, quantity:number){
    let cartItem = this.cart.items.find(item =>item.bake.id === bake.id);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.bake.price;
    this.setCartToLocalStorage();
  }
   clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
   }

   getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
   }

   private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((oldSum, newItem) => oldSum + newItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((oldSum, newItem) => oldSum + newItem.quantity, 0);
    
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
   }

   private getCartFromLocalStorage():Cart{
    if (typeof localStorage === 'undefined') {
      console.warn('localStorage is not available');
      return new Cart();
    }

    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart(); 
   }
  }
