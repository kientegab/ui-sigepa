import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { ConfirmationService, Message } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AmpliationDemande, IAmpliationDemande } from 'src/app/shared/model/ampliationDemande.model';
import { Demande, IDemande } from 'src/app/shared/model/demande.model';
import { AmpliationProjetService } from 'src/app/shared/service/ampliation-projet.service';
// import { IAmpliationDemande, Ampliation } from 'src/app/shared/model/ampliation.model';
//import { AmpliationProjetService } from 'src/app/shared/service/ampliation-service.service';

@Component({
  selector: 'app-ampliation-projet',
  templateUrl: './ampliation-projet.component.html',
  styleUrls: ['./ampliation-projet.component.scss']
})
export class AmpliationProjetComponent {

  @ViewChild('dtf') form!: NgForm;
  ampliation: IAmpliationDemande = new AmpliationDemande();
  @Input() data: IAmpliationDemande = new AmpliationDemande();
  ampliations: IAmpliationDemande[]=[];
  demande: IDemande = new Demande();
  demandes: IDemande[] = [];
  error: string | undefined;
  showDialog = false;
  isDialogOpInProgress!: boolean;
  message: any;
  dialogErrorMessage: any;
  timeoutHandle: any;
  isOpInProgress!: boolean;

  constructor(
    private ampliationProjetService: AmpliationProjetService,
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
    return !!this.ampliation.id;
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
    this.ampliation.demande = this.demande;
    console.log("ampliation a envoyé", this.ampliation)
        this.ampliationProjetService.create(this.ampliation).subscribe({
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
