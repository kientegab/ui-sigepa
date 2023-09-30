import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AnimateEnterDirective } from './animateenter.directive'; 

import { PublicRoutingModule } from './public-routing.module';
import { DashboardPublicComponent } from './dashboard-public.component';
import { PublicMenuComponent } from './public-menu/public-menu.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from '../account/login/login.component';
import { AccountRoutingModule } from '../account/account-routing.module';
import { NouvelleDetachementComponent } from './detachement/nouvelle-detachement/nouvelle-detachement.component';


@NgModule({
  declarations: [
    AnimateEnterDirective,
    DashboardPublicComponent,
    PublicMenuComponent,
    PublicFooterComponent,
    HomePageComponent,
    NouvelleDetachementComponent,
    
    
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    StyleClassModule,
    PublicRoutingModule,
    MenubarModule,
    AccountRoutingModule
  ]
})
export class PublicModule { }
