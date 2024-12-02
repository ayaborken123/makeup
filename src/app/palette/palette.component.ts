import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './palette.component.html',
  styleUrl: './palette.component.scss'
})
export class PaletteComponent  {
  product: any; 
  products = [ { id: 1, name: 'New Glamour Multi Finish Eyeshadow Palette',price: 48.9, description: 'Des teintes naturelles et subtiles', image: 'https://kikocosmetics.tn/49993-large_default/new-glamour-multi-finish-eyeshadow-palette.jpg',availability: true},
    { id: 2, name: 'Cult Colours Eyeshadow Palette"',price: 37.5, description: 'Des couleurs intenses et scintillantes pour des yeux captivants ', image: 'https://www.beaute-test.com/uploads/images/products/d126c5df5dffe46cfd41fb83cec0b92e11112e3d.jpg',availability: true } ,
    { id: 3, name: 'GLAMOUR MULTI FINISH EYESHADOW PALETTE ',price: 43.9, description: '  Palette fard à paupière - mauve selection', image: 'https://img01.ztat.net/article/spp-media-p1/03c935bde9cd4d7ab66959b99ded78f7/0da11838a9144022a2277f2ddfff9aec.jpg?imwidth=1800&filter=packshot' },
    { id: 4, name: 'GREEN ME eyeshadow palette',price: 48.0, description: 'Palette de 6 ombres à paupières aux finis variés : mat, nacré et métallisé ', image: 'https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flf2wbbijeo86%2F17OCblVHlPDJbIhyBpTxqs%2F742d91e6d0918e4c68b2811359ca4f6d%2FKM000000060103B_0.jpg&w=3840&q=75' } ,
    { id: 5, name: 'Palette "Rosée de Printemps',price: 31.3, description: 'Des nuances pastel et rosées pour un maquillage doux et romantique', image: 'https://bloomingdales.ae/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dw7489d9c1/sfcc-blm-production/2/1/7/6/5/217653949_IN.jpg?sw=435&sh=650&q=100',availability: true } ,
    { id: 6, name: 'REVOLUTION Palette Fard à Paupière',price: 29.9, description: 'Des teintes chaudes et lumineuses', image: 'https://beautystore.tn/18364-medium_default/palette-fard-%C3%A0-paupi%C3%A8re--hydra-dolphin-.jpg' ,availability: true} ,
    { id: 7, name: 'Palette Fard À Paupière Maquillage Yeux, Kit Maquillage Femme ',price: 38.6, description: 'Coffret Maquillage avec Rouge à Lèvre, Pinceaux, Bâton Contour, Correcteur, Fard à Joues ', image: 'https://m.media-amazon.com/images/I/71tAmqJJBVL.jpg' } ,
    { id: 8, name: 'Palette YK303',price: 27.1, description: 'Une palette pour les yeux marron avec 6 fards à paupières multi-effets et un highlighter nacré sensuel', image: 'https://yekoh.com/166-large_default/palette-maquillage-yeux-marron.jpg' ,availability: true} ,
    { id: 9, name: 'Cute Palette',price: 53.4, description: 'Parfaites pour un look quotidien',image:'https://i.pinimg.com/736x/d6/e9/04/d6e904bf65db779a0d6d815a270d168a.jpg' ,availability: true},
    { id: 10, name: 'Palette "Nude Élégance"',price: 43.9, description: '  Pour un look chic et moderne', image: 'https://i.pinimg.com/564x/20/a0/12/20a01208cdbf798c7487bcaf8d5bb9fc.jpg',availability: true } 


  ]; 
  constructor( private cartService: CartService) {}
  selectedProduct: number | null = null; 
  selectProduct(id: number): void { this.selectedProduct = id;}
  addToCart(product: any): void { this.cartService.addToCart(product); 
    alert(`Produit ajouté au panier : ${product.name}`);}

}
