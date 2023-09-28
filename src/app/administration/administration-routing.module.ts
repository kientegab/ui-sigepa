import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdministrationComponent } from './dashboard-administration.component';

const routes: Routes = [
  { path: '', data: {breadcrumb: 'Tableau de bord'}, component: DashboardAdministrationComponent },
  { path: 'account/infos-user', loadChildren: () => import('../account/infos-user/infos-user.module').then(m => m.InfosUserModule) },
  { path: 'communes', data: {breadcrumb: 'Gestion des communes'}, loadChildren: () => import('./parametre/commune/commune.module').then(m => m.CommuneModule) },
  { path: 'ministeres', data: {breadcrumb: 'Gestion des ministeres'}, loadChildren: () => import('./parametre/ministere/ministere.module').then(m => m.MinistereModule) },
  { path: 'visas', data: {breadcrumb: 'Gestion des visas'}, loadChildren: () => import('./parametre/visa/visa.module').then(m => m.VisaModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdministrationRoutingModule { }

