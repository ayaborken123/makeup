import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  signUpName = ''; 
  signUpEmail = '';
   signUpPassword = ''; 
   signInEmail = ''; 
   signInPassword = ''; 
   constructor(private router: Router){}
   onSignUp() { if (!this.signUpName || !this.signUpEmail || !this.signUpPassword) { 
    alert("Veuillez remplir tous les champs pour créer un compte."); 
    return; } 
    if (!this.validateEmail(this.signUpEmail)) {
       alert("Veuillez entrer un email valide."); return; } 
       alert(`Compte créé avec succès pour ${this.signUpName}!`);
       this.router.navigate(['/']);}
       onSignIn() { if (!this.signInEmail || !this.signInPassword) { 
        alert("Veuillez remplir tous les champs pour vous connecter."); return; } 
        if (!this.validateEmail(this.signInEmail)) { 
          alert("Veuillez entrer un email valide."); return; } 
          alert("Connexion réussie!"); 
          this.router.navigate(['/']);}
           validateEmail(email: string): boolean { const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             return regex.test(email);}

}
