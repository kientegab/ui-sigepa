import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibiliteComponent } from './disponibilite.component';
import { DisponibiliteAgentsComponent } from './disponibilite-agents/disponibilite-agents.component';
import { CreerModifierDisponibiliteComponent } from './creer-modifier-disponibilite/creer-modifier-disponibilite.component';

const routes: Routes = [
  {
    path: '',  component: DisponibiliteComponent
  },
  {
    path: 'agents',  component: DisponibiliteAgentsComponent
  }
  ,
  {
    path: 'creation',  component: CreerModifierDisponibiliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisponibiliteRoutingModule { }
