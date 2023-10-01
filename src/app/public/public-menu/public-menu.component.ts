import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: [
    './public-menu.component.scss'
]
})
export class PublicMenuComponent implements OnDestroy, OnInit {
    loggedIn = false;

  
    constructor(private router: Router) { }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
    
    items: MenuItem[]=[];
  
  
   
    ngOnInit() {
     
      this.items = [
        {
          label: 'Accueil',
          icon: 'pi pi-home',
          routerLink: [''] 
        },
        { 
          label: 'Détachement',
          items: [
            {
              label: 'Nouvelle détachement',
              routerLink: ['/public/N_detachement'],
              routerLinkActiveOptions: {
                exact: true
              }
            },
            {
              separator: true
            },
            {
              label: 'Renouvellement détachement',
              routerLink: ['/public/R_detachement'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            {
              separator: true
            },
            {
              label: 'Fin détachement',
              routerLink: ['/public/F_detachement'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            {
              separator: true
            },
            {
                label: 'Rectification détachement',
                routerLink: ['/public/RE_detachement'],
                routerLinkActiveOptions: {
                  exact: true
                } 
              },
              {
                separator: true
              },
            {
              label: 'Annulation détachement',
              routerLink: ['/public/A_detachement'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            
          ]
        },
        {
          label: 'Disponibilité',
          items: [
            {
              label: 'Nouvelle disponibilité',
              routerLink: ['/public/N_detachement'],
              routerLinkActiveOptions: {
                exact: true
              }
            },
            {
              separator: true
            },
            {
              label: 'Renouvellement disponibilité',
              routerLink: ['/public/congeMaternite'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            {
              separator: true
            },
            {
              label: 'Fin disponibilité',
              routerLink: ['/public/congeMaladie'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            {
              separator: true
            },
            {
                label: 'Rectification disponibilité',
                routerLink: ['/public/congeMaladie'],
                routerLinkActiveOptions: {
                  exact: true
                } 
              },
              {
                separator: true
              },
            {
              label: 'Annulation disponibilité',
              routerLink: ['/public/congeFinservice'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            
          ]
        },
        
        {
          label: 'Manuel Utilisateur',
          routerLink: ['/public/contact'] 
        },
        {
            label: 'Nous contacter',
            routerLink: ['/public/contact'] 
          },
      ];
    }
  
  
    logout(): void {
      // this.tokenStorageService.signOut();
       this.router.navigate(['/']);
       window.location.reload();
     }
     login() {
       this.router.navigate(['/auth/login']);
     }

}
