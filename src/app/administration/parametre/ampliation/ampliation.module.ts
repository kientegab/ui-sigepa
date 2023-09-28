import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmpliationRoutingModule } from './ampliation-routing.module';
import { CreerModifierAmpliationComponent } from './creer-modifier-ampliation/creer-modifier-ampliation.component';


@NgModule({
  declarations: [
    CreerModifierAmpliationComponent
  ],
  imports: [
    CommonModule,
    AmpliationRoutingModule
  ]
})
export class AmpliationModule { }
