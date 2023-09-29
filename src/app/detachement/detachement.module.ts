import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetachementRoutingModule } from './detachement-routing.module';
import { DetachementComponent } from './detachement.component';
import { CreerModifierDetachementComponent } from './creer-modifier-detachement/creer-modifier-detachement.component';
import { DetailsDetachementComponent } from './details-detachement/details-detachement.component';
import { AviserDetachementComponent } from './aviser-detachement/aviser-detachement.component';
import { DetachementAgentsComponent } from './detachement-agents/detachement-agents.component';


@NgModule({
  declarations: [
    DetachementComponent,
    CreerModifierDetachementComponent,
    DetailsDetachementComponent,
    AviserDetachementComponent,
    DetachementAgentsComponent
  ],
  imports: [
    CommonModule,
    DetachementRoutingModule
  ]
})
export class DetachementModule { }
