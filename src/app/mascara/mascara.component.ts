import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-mascara',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mascara.component.html',
  styleUrl: './mascara.component.scss'
})
export class MascaraComponent  {
  product: any; 
  products = [ 
    { id: 1, name: 'Mascara Maybelline SENSATIONAL NOIR ',price: 35.8, description: 'Un mascara volume effet éventail pour des cils démultipliés dun coin à lautre de lœil', image: 'https://www.lamode.tn/47155-large_default/mascara-maybelline-sensational-noir.webp' ,availability: true}, 
    { id: 2, name: 'Lash PRINCESS false lash effect mascara effet faux cils waterproof',price: 29.1, description: 'Mascara waterproof avec brosse conique en fibres pour un effet faux cils ', image: 'https://i8.amplience.net/i/Cosnova/4202922' ,availability: true} ,
    { id: 3, name: 'ARTDECO Mascara volume sensation',price: 28.130, description: 'Le Volume Sensation Mascara détient une brosse surdimensionnée qui offre beaucoup de volume aux cils', image: 'https://beautystore.tn/529-large_default/mascara-volume-supreme.jpg' } ,
    { id: 4, name: 'ESSENCE MASCARA I LOVE EXTREME VOLUME WATERPROOF',price: 14.3, description: 'Lashes to love dEssence est un nouveau mascara waterproof', image: 'https://feerie.tn/media/catalog/product/cache/edd4cd6c6ee1f5420ad9f14a1db5b72a/4/2/4250947543214.jpg',availability: true },
    { id: 5, name: 'ESSENCE Mascara "Lash princesse Sculptant Volume"',price: 14.5, description: 'Un volume spectaculaire ou des cils en éventail, bien définis  ', image: 'https://beautystore.tn/2627-large_default/mascara-lash-princesse-sculptant-volume.jpg' ,availability: true} ,
    { id: 6, name: 'Like Magic® Mascara',price: 34.2, description: 'This mascara gives you the appearance of longer, fuller, and thicker lashes ', image: 'https://wooshbeauty.com/cdn/shop/products/A_de0ddf35-4a2d-4cbe-931b-9626676e57b4.jpg?v=1681412306&width=2048' } ,
    { id: 7, name: 'Avon Big & Daring Waterproof Volume Mascara Black ',price: 39.3, description: 'Courbez vos cils naturellement pour un regard envoûtant. Formule légère et résistante', image: 'https://finesse.ra.tn/wp-content/uploads/2020/06/Avon-Big-Daring-Waterproof-Volume-Mascara-Black.png' } ,
    { id: 8, name: 'Big and Daring Volume Mascara Avon',price: 34.2, description: 'Des cils infiniment longs et élégants', image: 'https://www.beautybulletin.com/wp-content/uploads/2014/09/13511-big-and-daring-volume-mascara-avon-30-1410273763-1.jpg' } ,
    { id: 9, name: 'EYE CARE MASCARA VOLUMATEUR WATERPROOF - NOIR ',price: 50.8, description: 'Un mascara enrichi en vitamines pour des cils nourris', image: 'https://www.parashop.tn/image/cache/catalog/produits/eye-care/eye-care-mascara-volumateur-waterproof-620x620.jpg.webp' ,availability: true} ,
    { id: 10, name: 'Mascara Bleu Ever Beauty',price: 24.5, description: ' Mascara volumineux et allongeant ', image: 'https://chillandlit.tn/145760-large_default/mascara-bleu-ever-beauty.jpg',availability: true } 


  ]; 
  constructor(private cartService: CartService) {}
  selectedProduct: number | null = null; 
 
  selectProduct(id: number): void { this.selectedProduct = id;}
  addToCart(product: any): void { this.cartService.addToCart(product); 
    alert(`Produit ajouté au panier : ${product.name}`); }


}
