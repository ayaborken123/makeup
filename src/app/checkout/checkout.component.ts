import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  firstName: string = ''; 
  lastName: string = ''; 
  address: string = ''; 
  phone: string = ''; 
  email: string = '';
  constructor(private router: Router,private cartService: CartService) { }
  confirmOrder(): void { 
    if (!this.firstName || !this.lastName || !this.address || !this.phone || !this.email) { 
      alert("Veuillez remplir tous les champs pour confirmer votre commande."); 
      return; } 
      if (!this.validateEmail(this.email)) 
        { alert("Veuillez entrer un email valide.");
           return; } 
      alert(`Commande confirmée pour ${this.firstName} ${this.lastName}!`); 
      this.router.navigate(['/']);
      this.cartService.clearCart();
    } 
  validateEmail(email: string): boolean { 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email); }

    
}
