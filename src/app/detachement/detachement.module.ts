import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetachementRoutingModule } from './detachement-routing.module';
import { DetachementComponent } from './detachement.component';
import { CreerModifierDetachementComponent } from './creer-modifier-detachement/creer-modifier-detachement.component';
import { DetailsDetachementComponent } from './details-detachement/details-detachement.component';
import { AviserDetachementComponent } from './aviser-detachement/aviser-detachement.component';
import { DetachementAgentsComponent } from './detachement-agents/detachement-agents.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { AppCommonModule } from '../shared/common/app-common.module';
import {FileUploadModule} from "primeng/fileupload";


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
        DetachementRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        DynamicDialogModule,
        TableModule,
        CardModule,
        InputTextModule,
        DialogModule,
        DividerModule,
        ProgressBarModule,
        MessageModule,
        DropdownModule,
        AppCommonModule,
        ConfirmDialogModule,
        ProgressSpinnerModule,
        PaginatorModule,
        CalendarModule,
        FileUploadModule
    ]
})
export class DetachementModule { }
