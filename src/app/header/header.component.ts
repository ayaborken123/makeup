import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink } from '@angular/router';
import {MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule,RouterLink,MatIconModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  productNames = ['Les Rouges à Lèvres', 'Les Fond de Teint', 'Les Palettes de Fards', 'Les Mascara', 'Les Blush','Les Vernis']; 
  constructor(private router: Router) {} 
  selectProduct(product: string): void { this.router.navigate(['/products', product]); }
  
}
