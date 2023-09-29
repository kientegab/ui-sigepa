import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibiliteComponent } from './disponibilite.component';
import { DetachementAgentsComponent } from '../detachement/detachement-agents/detachement-agents.component';
import { DisponibiliteAgentsComponent } from './disponibilite-agents/disponibilite-agents.component';

const routes: Routes = [
  {
    path: '',  component: DisponibiliteComponent
  },
  {
    path: 'agents',  component: DisponibiliteAgentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisponibiliteRoutingModule { }
