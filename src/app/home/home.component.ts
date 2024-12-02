import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatGridListModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products = [ { id: 1, name: 'Rouge à Lèvres', description: 'Rouge à lèvres longue tenue', image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_600/https://hpmbeauty.com/wp-content/uploads/2022/01/hpm-tunisie-color-boost-liquid-lipstick-8.jpg' }, 
    { id: 2, name: 'Fond de Teint', description: 'Fond de teint pour une peau parfaite', image: 'https://beautystore.tn/19159-large_default/fond-de-teint--flawless-skin-spf20-.jpg' }, 
    { id: 3, name: 'Palette de Fards', description: 'Palette de fards à paupières', image: 'https://beautystore.tn/19140-large_default/palette-eyeface--bloom-baby-bloom--01-peach.jpg' } ,
    {id: 4, name: 'Mascara', description: 'Un volume spectaculaire', image: 'https://feerie.tn/media/catalog/product/cache/edd4cd6c6ee1f5420ad9f14a1db5b72a/4/2/4250947516027.jpg'}, 
    { id: 5, name: 'Blush', description: 'Stick blush formule crémeuse', image: 'https://sangour.tn/wp-content/uploads/2024/09/ESSENCE-BLUSH-BABY-GOT-N40-CORAL-CRUSH.png' }, 
    { id: 6, name: 'Eyeliner', description: 'Feutre eyeliner pour obtenir un look parfait', image: 'https://ucanbe.tn/storage/media/3C11b.jpg' } 
  
    ]; 
    selectedProduct: number | null = null;
    constructor(private router: Router) { } 
    ngOnInit(): void {} 
    selectProduct(id: number): void { this.selectedProduct = id; } 
    openProduct( id: number): void {
        
      
       this.router.navigate(['/products', id]); }

}
