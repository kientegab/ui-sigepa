import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: [
    './public-menu.component.scss'
]
})
export class PublicMenuComponent implements  OnInit {
    loggedIn = false;

  
    constructor(private router: Router) { }

    // ngOnDestroy(): void {
    //     throw new Error('Method not implemented.');
    // }
    
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
              routerLink: ['/public/N_disponibilite'],
              routerLinkActiveOptions: {
                exact: true
              }
            },
            {
              separator: true
            },
            {
              label: 'Renouvellement disponibilité',
              routerLink: ['/public/R_disponibilite'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            {
              separator: true
            },
            {
              label: 'Fin disponibilité',
              routerLink: ['/public/F_disponibilite'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            {
              separator: true
            },
            {
                label: 'Rectification disponibilité',
                routerLink: ['/public/RE_disponibilite'],
                routerLinkActiveOptions: {
                  exact: true
                } 
              },
              {
                separator: true
              },
            {
              label: 'Annulation disponibilité',
              routerLink: ['/public/A_disponibilite'],
              routerLinkActiveOptions: {
                exact: true
              } 
            },
            
          ]
        },
        
        {
          label: 'Manuel Utilisateur',
          command: () => this.download(),
        },
        {
            label: 'Nous contacter',
            routerLink: ['public/contact'] 
          },
      ];
    }
  
  
    logout(): void {
      // this.tokenStorageService.signOut();
       this.router.navigate(['/']);
       window.location.reload();
     }

     login() {
       this.router.navigate(['auth/login']);
     }
   
     download(){
        window.open(environment.domaine+'/assets/img/manuel.pdf','_blank');
      }


}
