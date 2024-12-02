import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  items: any[] = []; constructor(private cartService: CartService, private router: Router) {} 
  ngOnInit(): void { this.items = this.cartService.getItems(); } 
  proceedToCheckout(): void { this.router.navigate(['/checkout']); } 
  clearCart(): void { this.cartService.clearCart(); 
    this.items = []; 
    console.log('Panier vidé'); }

}
