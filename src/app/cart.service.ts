import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private items: any[] = []; 
 addToCart(product: any): void { this.items.push(product); } 
 getItems(): any[] { return this.items; } 
 clearCart(): void { this.items = []; }
}
