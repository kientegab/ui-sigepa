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
  items: MenuItem[] = [];

  subscription: Subscription;

  darkMode: boolean = false;
  hidden: boolean = false

  constructor(public router: Router, private layoutService: LayoutService) {
      this.subscription = this.layoutService.configUpdate$.subscribe(config => {
          this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
      });
  }

  ngOnInit() {
    this.items = [
        {
            label: 'Accueil',
            routerLink: ['/'],
        },
        {
            label: 'Expace membre',
            routerLink: ['/'],
        },
        {
            label: 'Création compte',
            routerLink: ['/account'],
        },
        {
            label: 'Bibliothèque',
            items: [
                {
                    label: 'Loi',
                    routerLink: ['/loi'],
                },
                {
                    separator: true
                },
                {
                    label: 'Circulaire',
                    routerLink: ['/circulaire'],
                },
                {
                    separator: true
                },
                {
                    label: 'Décret',
                    routerLink: ['/decret'],
                },
                {
                    separator: true
                },
                {
                    label: 'Arrête',
                    routerLink: ['/arrete'],
                },
                {
                    separator: true
                },
                {
                    label: 'Note',
                    routerLink: ['/note'],
                },
                {
                    separator: true
                },
                {
                    label: 'Convention',
                    routerLink: ['/convention'],
                },
                // {
                //     separator: true
                // },
                // {
                //     label: 'Formulaires',
                //     routerLink: ['/bibliotheque'],
                // }
            ]
        },
        {
            label: 'FAQ',
            routerLink: ['/faq'],
        },
    ];
}

showHideMenu(){
    console.log(this.hidden);
    if(this.hidden)
        this.hidden = false;
    else
        this.hidden = true;
}

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
