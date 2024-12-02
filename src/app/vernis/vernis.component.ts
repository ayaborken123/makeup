import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-vernis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vernis.component.html',
  styleUrl: './vernis.component.scss'
})
export class VernisComponent {
  product: any; 
  products = [ { id: 1, name: 'Kolsi Vernis à Ongles 112',price: 6.600 , description: 'Vernis à ongles avec brillance extrême et longue tenue', image: 'https://www.paranet.tn/6809-large_default/kolsi-vernis-a-ongles-001-.jpg',availability: true }, 
    { id: 2, name: 'Kolsi Vernis à Ongles 411',price: 5.500, description: 'Vernis à ongles avec brillance extrême et longue tenue', image: 'https://www.paranet.tn/6962-large_default/kolsi-vernis-a-ongles-001-.jpg ',availability: true  } ,
    { id: 3, name: 'Vernis à Ongles OnColour',price:11.900 , description: 'Les ongles soignés préparent le terrain pour votre journée', image: 'https://finesse.ra.tn/wp-content/uploads/2021/03/Vernis-a-OnglesOnColour.png',availability: true  } ,
    { id: 4, name: 'Vernis couleur miracle gel n°700 14.7 ml - sally hansen',price: 10.0, description: ' La formule du vernis Miracle Gel vous offre une manucure effet gel longue tenue qui résiste à lécaillement !', image: 'https://cosmetique.tn/12241-home_default/vernis-couleur-miracle-gel-n700-147-ml-sally-hansen.jpg' },
    { id: 5, name: 'ESSENCE Vernis à Ongles " Gel Nail Colour "',price: 6.900, description: 'L Essence Gel Nail Color donne à vos ongles limpression qu ils viennent davoir une manucure au gel !  ', image: 'https://beautystore.tn/14170-large_default/vernis-a-ongles-gel-nail-colour-.jpg',availability: true  } ,
    { id: 6, name: 'Vernis à ongles permanent en gel n°019 12ml - Kodi',price: 22.502, description: 'Belles couleurs supérieures et brillance miroir', image: 'https://cosmetique.tn/16698-large_default/vernis-a-ongles-en-gel-n019-12ml-kodi.jpg',availability: true  } ,
    { id: 7, name: 'Pink Vernis Permanent ',price: 12.500, description: 'Vernis gel très résistant, qui ne sécaille pas ', image: 'https://kensho.tn/11287-large_default/pink-vernis-permanent.jpg' } ,
    { id: 8, name: 'Essential Vernis Permanent 15ml N°101 ',price: 23.000 , description: 'Essential Vernis permanent. Couleur de tous les saisons, chic et féminine pour une superbe pose vernis ', image: 'https://cherrybeauty.tn/3443-large_default/essential-vernis-permanent-15ml-n%C2%B0101.jpg' } ,
    { id: 9, name: 'Vernis permanent 15 ml - skinlink',price: 23.400 , description: 'Pour toutes celles qui veulent une manucure longue durée et professionnelle en un clin dœil', image: 'https://www.bonheur.tn/2806-large_default/vernis-permanent-15-ml-skinlink.jpg' ,availability: true } ,
    { id: 10, name: 'Vernis semi-permanent I-LAK - burgundy chérie',price: 34.1, description: ' Vernis semi-permanent professionnel pour une manucure parfaite et longue durée', image: 'https://www.cdiscount.com/pdt2/1/4/8/2/700x700/auc9165260648148/rw/vernis-a-ongles-15ml-vernis-semi-permanent-gel-pol.jpg',availability: true  } 


  ]; 
  constructor( private cartService: CartService) {}
  selectedProduct: number | null = null; 

  selectProduct(id: number): void { this.selectedProduct = id;}
  addToCart(product: any): void { this.cartService.addToCart(product); 
    alert(`Produit ajouté au panier : ${product.name}`); }


}
