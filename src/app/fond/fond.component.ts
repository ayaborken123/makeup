import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-fond',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fond.component.html',
  styleUrl: './fond.component.scss'
})
export class FondComponent  {
  product: any; 
  products = [ { id: 1, name: 'FOND DE TEINT SEPHORA',price: 43.9, description: 'Une formule haute pigmentation pour une couvrance parfaite', image: 'https://www.lamode.tn/20826-large_default/fond-de-teint-perfect-10h-16.webp' }, 
    { id: 2, name: 'MAYBELLINE FIT ME MATTE Fonds de teint',price: 30.5, description: 'Fond De Teint fluide ', image: 'https://www.fatales.tn/104089-large_default/gemey-maybelline-fit-me-matte-fonds-de-teint.jpg',availability: true  } ,
    { id: 3, name: 'FOND DE TEINT LIQUIDE " DETOX AND PROTECT "',price: 47.2, description: 'Le Fond de Teint Liquide Detox and Protect de Note Cosmétique est idéal pour une peau protégée et éclatante', image: 'https://www.yousarssif.com/7661-medium_default/fond-de-teint-detoxe.jpg',availability: true  } ,
    { id: 4, name: 'Toi Beauty - For You Fond de Teint 140',price: 48.2, description: ' La couverture complète, une légère BB crème', image: 'https://i5.walmartimages.com/asr/8718799e-84ed-4b59-a5fb-f55c4ab5a6ea.25b7c0081cfa72e498e7d63589ac4102.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF' },
    { id: 5, name: 'SHEGLAM Fond De Teint Mat Respirant',price: 35.9, description: 'SHEGLAM Fond De Teint Mat Respirant Longue Tenue Complexion Pro ', image: 'https://api.tiktakpro.com/media/static/media/IMG_4416.webp' ,availability: true } ,
    { id: 6, name: 'Power Stay 24 Heures Fond de Teint',price: 75.5, description: ' Résiste à la chaleur, à l’humidité, à l’eau et à la sueur', image: 'https://avon.com.tn/wp-content/uploads/power-stay-24-hour-foundation-120n-porcelain-1474628-30ml.jpg' } ,
    { id: 7, name: 'Fond de teint SEPHORA MAT TAN 46 ',price: 59.8, description: 'Une couvrance moyenne qui camoufle les imperfections', image: 'https://www.lamode.tn/34897-large_default/fond-de-teint-sephora-mat-tan-46.webp' } ,
    { id: 8, name: 'MAYBELLINE NEW YORK FIT ME FOND DE TEINT MATTE ',price: 45.2, description: 'Saccorder à chaque carnation sans démarcation ', image: 'https://pharma-shop.tn/14113-medium_default/maybilline-new-york-fit-me-fond-de-teint-matte-poreless-30ml.webp',availability: true  } ,
    { id: 9, name: 'Beyond Perfecting™ Fond de Teint + Anti-Cernes',price: 38.7, description: 'Un fond de teint et un correcteur en un pour un look naturel qui dure 24 heures', image: 'https://sdcdn.io/cl/cl_sku_Z9FF10_3000x3000_0.jpg' ,availability: true } ,
    { id: 10, name: 'Fond de Teint Liquide',price: 55.1, description: ' Foundation & Concealer, Waterproof', image: 'https://m.media-amazon.com/images/I/61SMHcEybLL._AC_UF1000,1000_QL80_.jpg' } 


  ]; 
  constructor( private cartService: CartService) {}
  selectedProduct: number | null = null; 

  selectProduct(id: number): void { this.selectedProduct = id;}
  addToCart(product: any): void { this.cartService.addToCart(product); 
    alert(`Produit ajouté au panier : ${product.name}`); }

}
