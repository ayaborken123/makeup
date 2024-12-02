import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { RougeComponent } from './rouge/rouge.component';
import { FondComponent } from './fond/fond.component';
import { PaletteComponent } from './palette/palette.component';
import { MascaraComponent } from './mascara/mascara.component';
import { BlushComponent } from './blush/blush.component';
import { VernisComponent } from './vernis/vernis.component';


export const routes: Routes = [
  
     { path: '', component: HomeComponent
        
     },
     { path: 'footer', component: FooterComponent
        
     },
     { path: 'products/:id', component: ProductComponent }, 
     { path: 'cart', component: CartComponent },
     { path: 'login', component: LoginComponent },
    
     { path: 'checkout', component: CheckoutComponent},
     { path: 'rouge', component: RougeComponent}, 
     { path: 'fond', component: FondComponent }, 
     { path: 'palette', component: PaletteComponent }, 
     { path: 'mascara', component: MascaraComponent }, 
     { path: 'blush', component: BlushComponent },
     { path: 'vernis', component: VernisComponent }
];

