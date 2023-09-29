import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisponibiliteRoutingModule } from './disponibilite-routing.module';
import { DisponibiliteComponent } from './disponibilite.component';
import { CreerModifierDisponibiliteComponent } from './creer-modifier-disponibilite/creer-modifier-disponibilite.component';
import { DetailsDisponibiliteComponent } from './details-disponibilite/details-disponibilite.component';
import { AviserDisponibiliteComponent } from './aviser-disponibilite/aviser-disponibilite.component';
import { DisponibiliteAgentsComponent } from './disponibilite-agents/disponibilite-agents.component';


@NgModule({
  declarations: [
    DisponibiliteComponent,
    CreerModifierDisponibiliteComponent,
    DetailsDisponibiliteComponent,
    AviserDisponibiliteComponent,
    DisponibiliteAgentsComponent
  ],
  imports: [
    CommonModule,
    DisponibiliteRoutingModule
  ]
})
export class DisponibiliteModule { }
