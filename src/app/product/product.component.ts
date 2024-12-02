import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product: any; 
  products = [ { id: 1, name: 'Rouge à Lèvres', title: 'Longue Tenue', price: 19.99, image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_600/https://hpmbeauty.com/wp-content/uploads/2022/01/hpm-tunisie-color-boost-liquid-lipstick-8.jpg',availability: true  }, 
    { id: 2, name: 'Fond de Teint', title: 'Peau Parfaite', price: 29.99, image: 'https://beautystore.tn/19159-large_default/fond-de-teint--flawless-skin-spf20-.jpg',availability: true  },
     { id: 3, name: 'Palette de Fards', title: 'À Paupières', price: 24.99, image: 'https://beautystore.tn/19140-large_default/palette-eyeface--bloom-baby-bloom--01-peach.jpg',availability: true  }, 
     { id: 4, name: 'Mascara', title: 'Volumisant', price: 14.99, image: 'https://feerie.tn/media/catalog/product/cache/edd4cd6c6ee1f5420ad9f14a1db5b72a/4/2/4250947516027.jpg' } ,
     { id: 5, name: 'Blush', title: 'Stick', price: 20, image: 'https://sangour.tn/wp-content/uploads/2024/09/ESSENCE-BLUSH-BABY-GOT-N40-CORAL-CRUSH.png' } ,
     { id: 6, name: 'EyeLiner', title: 'Feutre', price: 17.8, image: 'https://ucanbe.tn/storage/media/3C11b.jpg',availability: true  } ,


    ];
    constructor(private route: ActivatedRoute, private cartService: CartService,private router:Router) {} 
  ngOnInit(): void { const idParam = this.route.snapshot.paramMap.get('id'); 
    const id = idParam !== null ? +idParam : null; 
    if (id !== null) { this.product = this.products.find(product => product.id === id); } 
    else { console.error('ID invalide'); } } 
    addToCart(product: any): void { this.cartService.addToCart(product); 
      
      alert(`Produit ajouté au panier : ${product.name}`);
      this.router.navigate(['/']);
     }
    
      
    

}
