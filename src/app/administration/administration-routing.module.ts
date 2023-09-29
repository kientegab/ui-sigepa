import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdministrationComponent } from './dashboard-administration.component';

const routes: Routes = [
  { path: '', data: {breadcrumb: 'Tableau de bord'}, component: DashboardAdministrationComponent },
  { path: 'account/infos-user', loadChildren: () => import('../account/infos-user/infos-user.module').then(m => m.InfosUserModule) },
  { path: 'communes', data: {breadcrumb: 'Gestion des communes'}, loadChildren: () => import('./parametre/commune/commune.module').then(m => m.CommuneModule) },
  { path: 'pieces', data: {breadcrumb: 'Gestion des pieces'}, loadChildren: () => import('./parametre/piece/piece.module').then(m => m.PieceModule) },
  { path: 'articles', data: {breadcrumb: 'Gestion des articles'}, loadChildren: () => import('./parametre/article/article.module').then(m => m.ArticleModule) },
  { path: 'corps', data: {breadcrumb: 'Gestion des corps'}, loadChildren: () => import('./parametre/corps/corps.module').then(m => m.CorpsModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdministrationRoutingModule { }

