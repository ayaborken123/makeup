import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';


import { CartService } from '../cart.service';

@Component({
  selector: 'app-rouge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rouge.component.html',
  styleUrl: './rouge.component.scss'
})
export class RougeComponent  {
  product: any; 
  products = [ { id: 1, name: 'ESSENCE ROUGE À LÈVRES COLOR BOOST LIQUID ',price: 12.9, description: 'Un rouge glamour, parfait pour illuminer vos soirées', image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_600/https://hpmbeauty.com/wp-content/uploads/2022/01/hpm-tunisie-color-boost-liquid-lipstick-8.jpg',availability: true }, 
    { id: 2, name: 'ROUGE À LÈVRES MAYBELLINE LIQUID MAT',price: 15.0, description: 'Un prune intense pour un look audacieux ', image: 'https://www.lamode.tn/21570-large_default/rouge-a-levre-sensational-liquid-mat-de-maybelline.webp',availability: true } ,
    { id: 3, name: 'MAYBELLINE ROUGE À LÈVRES MAT VELOUTÉ',price: 15.5, description: 'Un orange doux infusé de notes pêche pour un sourire frais et éclatant', image: 'https://www.bonheur.tn/5541-large_default/maybelline-rouge-a-levres-color-sensational-liquid-matte.jpg' } ,
    { id: 4, name: 'GIVENCHY LE ROUGE À LÈVRES 205',price: 13.9, description: 'Un rouge classique au fini lumineux', image: 'https://statics.docmorris.fr/static/promofarma/prod/product_images/z/ITDOJG_fr_FR_0.jpg' ,availability: true },
    { id: 5, name: 'ROUGE À LÈVRES DIOR FOREVER LIQUIDE',price: 20.0, description: 'Rouge à lèvres liquide mat ultra pigmenté ', image: 'https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2024/07/22103000/42-Deep-Beige-2024-07-19-T141020-615.jpg' } ,
    { id: 6, name: 'DIOR ADDICT LIP GLOW',price: 23.0, description: 'Sublimer les lèvres et faire ressortir leur couleur naturelle', image: 'https://m.media-amazon.com/images/I/61L5viyXz8L._SL1500_.jpg' } ,
    { id: 7, name: 'DIOR LIP GLOW OIL ',price: 27.9, description: 'Un rouge à lèvres brillant', image: 'https://i5.walmartimages.com/seo/Dior-Lip-Glow-Oil-000-Universal-clear-0-2-oz-6mL_c67ad4a9-854c-4682-9f58-ed1b3c27b047.4a28a7d5de912cbfd611f72213435b46.jpeg' } ,
    { id: 8, name: 'BEAUTE GLAZED COULEUR VARIETE',price: 26.800, description: 'Lisse Brillant Finition Luxueuse ', image: 'https://m.media-amazon.com/images/I/51lJIqOMRsL._SL1000_.jpg' } ,
    { id: 9, name: 'DIOR LIP GLOW OIL',price: 36.500 ,description: 'Inspiré de léclat des pierres précieuses', image: 'https://image-api.kremmania.hu/images/products/6X/4N/dior-lip-glow-oil-lipglosss9',availability: true } ,
    { id: 10, name: 'LIP TINT KOREAN ',price: 49.200, description: 'High Pigment Lip Tint Makeup', image: 'https://images-cdn.ubuy.co.in/64479535f5bd42510079e747-2-pcs-crystal-jelly-hydrating-lip-oil.jpg' ,availability: true} 


  ]; 
  constructor(private cartService: CartService) {} 
  selectedProduct: number | null = null; 
  
  selectProduct(id: number): void { this.selectedProduct = id;}
  addToCart(product: any): void { this.cartService.addToCart(product); 
    alert(`Produit ajouté au panier : ${product.name}`); }

}
