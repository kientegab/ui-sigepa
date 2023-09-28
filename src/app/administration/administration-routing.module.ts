import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdministrationComponent } from './dashboard-administration.component';

const routes: Routes = [
  { path: '', data: {breadcrumb: 'Tableau de bord'}, component: DashboardAdministrationComponent },
  { path: 'account/infos-user', loadChildren: () => import('../account/infos-user/infos-user.module').then(m => m.InfosUserModule) },
  { path: 'ministeres', data: {breadcrumb: 'Gestion des ministeres'}, loadChildren: () => import('./parametre/ministere/ministere.module').then(m => m.MinistereModule) },
  { path: 'visas', data: {breadcrumb: 'Gestion des visas'}, loadChildren: () => import('./parametre/visa/visa.module').then(m => m.VisaModule) },
  { path: 'structures', data: {breadcrumb: 'Gestion des structures'}, loadChildren: () => import('./parametre/structure/structure.module').then(m => m.StructureModule) },
  { path: 'type-structures', data: {breadcrumb: 'Gestion des types de structures'}, loadChildren: () => import('./parametre/type-structure/type-structure.module').then(m => m.TypeStructureModule) },
  { path: 'type-demandes', data: {breadcrumb: 'Gestion des types de demandes'}, loadChildren: () => import('./parametre/type-demande/type-demande.module').then(m => m.TypeDemandeModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdministrationRoutingModule { }

