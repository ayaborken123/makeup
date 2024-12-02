import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-blush',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blush.component.html',
  styleUrl: './blush.component.scss'
})
export class BlushComponent{
  product: any; 
  products = [ { id: 1, name: 'DIOR ROUGE BLUSH',price: 50.8, description: 'Blush haute pigmentation - formule clean - longue tenue', image:'https://lareine.com.tn/13354-large_default/dior-rouge-blush.jpg',availability: true }, 
    { id: 2, name: 'Rouge Blush Colour & Glow',price: 57.8, description: 'Rouge Blush Colour & Glow is het duo make-uppalette in matte en stralende finishes van Dior', image: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw55ca577a/Y0459002/Y0459002_C045900257_E01_GHC.jpg?sw=1850&sh=1850' } ,
    { id: 3, name: 'Elf. Palette Blush en poudre ',price: 57.5, description: 'Pour couleur rayonnante et longue durée, végétalienne', image: 'https://m.media-amazon.com/images/I/819zF9qbHEL._SL1500_.jpg' ,availability: true} ,
    { id: 4, name: 'Fard à joues',price: 14.5, description: ' Un blush qui habille les joues dune couleur éblouissante, homogène, facile à applique', image: 'https://sdcdn.io/mac/fr/mac_sku_M2206R_1x1_0.png?width=1440&height=1440' ,availability: true},
    { id: 5, name: 'Fard à joues en poudre Revlon®',price: 18.8, description: 'Fard à joues poudre, à votre façon, dans une couleur douce et modulable', image: 'https://cdn.azure.revlon.com/-/media/revlon/content/products/face/blush/revlon-face-powder-blush-bulk-product-detail-1x1.ashx?h=900&iar=0&w=900' } ,
    { id: 6, name: 'Blush Liquide "Blushin Berry" N°20',price: 33.6, description: 'Le blush liquide Essence Baby Got Blush en teinte 20 Blushin Berry offre une couleur naturelle avec un fini subtil', image: 'https://ucanbe.tn/storage/media/202407/0C74DBkC356n7tJBhmrQAR4LCRCxEink6fJBZhRX.webp' } ,
    { id: 7, name: 'Fard à joues liquide couleur bloom – SHEGLAM',price: 27.9, description: 'Éclatez de couleur avec notre Color Bloom Blush Liquide ', image: 'https://gust.tn/wp-content/uploads/2024/06/maquillage-prix-tunisie-cheglam-fard-a-joux-3.webp' ,availability: true} ,
    { id: 8, name: 'INGRID BLUSH LIQUIDE 01 ',price: 33.3, description: 'Liquid Blush est un blush exceptionnellement efficace et facile à appliquer avec une consistance liquide innovante', image: 'https://lbdc.tn/8275-large_default/blush-liquide-01.jpg' ,availability: true} ,
    { id: 9, name: 'BLUSH LIQUIDE JOUES ET LÈVRES " WHAT A TINT! LIP & CHEEK TINT "',price: 16.0, description: 'Ce blush liquide colore les joues et les lèvres en toute transparence pendant des heures', image: 'https://feerie.tn/media/catalog/product/cache/edd4cd6c6ee1f5420ad9f14a1db5b72a/b/l/blush-liquide-joues-et-levres-what-a-tint-lip-cheek-tint-.jpg' } ,
    { id: 10, name: 'Blush Liquid Bomb',price:15.5, description: ' Le blush bomb de revolution est un blush liquide légère facile à appliquer grace à la texture fluide et lapplicateur sabot', image: 'https://www.bonheur.tn/7038-large_default/blush-liquid-bomb.jpg' ,availability: true} 


  ]; 
  constructor( private cartService: CartService) {}
  selectedProduct: number | null = null; 
  
  selectProduct(id: number): void { this.selectedProduct = id;}
  addToCart(product: any): void { this.cartService.addToCart(product); 
    alert(`Produit ajouté au panier : ${product.name}`); }

}
