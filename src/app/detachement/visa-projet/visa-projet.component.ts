import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { MenuItem, ConfirmationService, Message } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { CreerModifierVisaComponent } from 'src/app/administration/parametre/visa/creer-modifier-visa/creer-modifier-visa.component';
import { DetailsvisaComponent } from 'src/app/administration/parametre/visa/details-visa/details-visa.component';
import { CURRENT_PAGE, MAX_SIZE_PAGE } from 'src/app/shared/constants/pagination.constants';
import { IDemande, Demande } from 'src/app/shared/model/demande.model';
import { IVisaDemande, VisaDemande } from 'src/app/shared/model/visaDemande.model';
import { VisaProjetService } from 'src/app/shared/service/visa-projet.service';
//import { visaProjetService } from 'src/app/shared/service/visa-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visa-projet',
  templateUrl: './visa-projet.component.html',
  styleUrls: ['./visa-projet.component.scss']
})
export class VisaProjetComponent {
 
  @ViewChild('dtf') form!: NgForm;
  visa: IVisaDemande = new VisaDemande();
  @Input() data: IVisaDemande = new VisaDemande();

  demande: IDemande = new Demande();
  demandes: IDemande[] = [];
  // visas: IVisaDemande[]=[];
  error: string | undefined;
  showDialog = false;
  isDialogOpInProgress!: boolean;
  message: any;
  dialogErrorMessage: any;
  timeoutHandle: any;
  isOpInProgress!: boolean;

  constructor(
    private visaProjetService: VisaProjetService,
    private dialogRef: DynamicDialogRef,
    private dynamicDialog: DynamicDialogConfig,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
   
    if (this.dynamicDialog.data) {
      this.demande = cloneDeep(this.dynamicDialog.data);
      // this.demandes.push(this.demande);
    }
  }


  clear(): void {
    this.form.resetForm();
    this.dialogRef.close();
    this.dialogRef.destroy();
  }
  isEditing() {
    return !!this.visa.id;
  }

  clearDialogMessages() {
    this.dialogErrorMessage = null;
  }
  // Errors
  handleError(error: HttpErrorResponse) {
    console.error(`Processing Error: ${JSON.stringify(error)}`);
    this.isDialogOpInProgress = false;
    this.dialogErrorMessage = error.error.title;
  }

  showMessage(message: Message) {
    this.message = message;
    this.timeoutHandle = setTimeout(() => {
      this.message = null;
    }, 5000);
  }
  saveEntity(): void {
    this.clearDialogMessages();
    this.isDialogOpInProgress = true;
    this.visa.demande = this.demande;
    console.log("visaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa a envoyé", this.visa)
        this.visaProjetService.create(this.visa).subscribe({
          next: (response) => {
            this.dialogRef.close(response);
            this.dialogRef.destroy();
            this.showMessage({
              severity: 'success',
              summary: 'visa creer avec succès',
            });
          },
          error: (error) => {
            console.error("error" + JSON.stringify(error));
            this.isOpInProgress = false;
            this.showMessage({ severity: 'error', summary: error.error.message });

          }
        });
      
    }
  

  }



