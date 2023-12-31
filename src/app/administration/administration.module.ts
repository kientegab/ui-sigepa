import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { DashboardAdministrationComponent } from './dashboard-administration.component';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ActionsToolbarIudComponent } from '../shared/comon/actions-toolbar-iud/actions-toolbar-iud.component';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CrudToolbarComponent } from '../shared/comon/crud-toolbar/crud-toolbar.component';
import {ArchwizardModule} from "angular-archwizard";
import { AmpliationComponent } from './parametre/ampliation/ampliation.component';
import {
    CreerModifierAmpliationComponent
} from "./parametre/ampliation/creer-modifier-ampliation/creer-modifier-ampliation.component";

@NgModule({
  declarations: [
    DashboardAdministrationComponent,
    ActionsToolbarIudComponent,
    CrudToolbarComponent,
    AmpliationComponent,
    CreerModifierAmpliationComponent
  ],
  imports: [
  CommonModule,
    AdministrationRoutingModule,
    DividerModule,
    FormsModule,
    MessagesModule,
    ButtonModule,
    KnobModule,
    ChartModule,
    TableModule,
    ArchwizardModule.forRoot()
  ],
  exports: [
    MessagesModule,
    ActionsToolbarIudComponent,
    CrudToolbarComponent
  ]
})
export class AdministrationModule { }
