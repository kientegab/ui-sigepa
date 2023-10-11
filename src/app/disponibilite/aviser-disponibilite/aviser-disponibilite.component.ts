import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { ConfirmationService, SelectItem } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { IDemande, Demande } from 'src/app/shared/model/demande.model';
import { Historique, IHistorique, AVIS } from 'src/app/shared/model/historique.model';

@Component({
  selector: 'app-aviser-disponibilite',
  templateUrl: './aviser-disponibilite.component.html',
  styleUrls: ['./aviser-disponibilite.component.scss']
})
export class AviserDisponibiliteComponent {


  demande: IDemande = new Demande();
  @Input() data: IDemande = new Demande();
  demandes: any;
  isDialogOpInProgress: boolean | undefined;
  demandeService: any;
  isOpInProgress: boolean | undefined;
  aviser!: boolean;
  receptionner!: boolean;
  dialogErrorMessage: any;
  typeDemandeService: any;
  typeDemandes: any;
  message: { severity: string; summary: any; } | undefined;
  historique:IHistorique = new Historique();
  avis = AVIS;
  
 

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.demande = cloneDeep(this.dynamicDialog.data);
    }
  }
    

  clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }
  // avis: SelectItem[] = [
  //   { label: 'Avis favorable ', value: avis.avis1 },
  //   { label: 'Avis defavorable', value: avis.avis2 },
  // ];
 

  // Errors
  handleError(error: HttpErrorResponse) {
    console.error(`Processing Error: ${JSON.stringify(error)}`);
    this.isDialogOpInProgress = false;
    this.dialogErrorMessage = error.error.title;
  }
  
  saveEntity(): void {
    this.clearDialogMessages();
    this.isDialogOpInProgress = true;
    if (this.demande) {
      if (this.demande.id) {
        this.demande.historique=this.historique;
        this.demandeService.update(this.demande).subscribe(
          {
            next: (response: any) => {
              this.dialogRef.close(response);
              this.dialogRef.destroy();
              this.showMessage({ severity: 'success', summary: 'demande modifié avec succès' });
             
            },
            error: (error: { error: { message: any; }; }) => {
              console.error("error" + JSON.stringify(error));
              this.isOpInProgress = false;
              this.showMessage({ severity: 'error', summary: error.error.message });

            }
          });
      } else {
        this.demandeService.create(this.demande).subscribe({
          next: (response: any) => {
            this.dialogRef.close(response);
            this.dialogRef.destroy();
            this.showMessage({
              severity: 'success',
              summary: 'demande creer avec succès',
            });
          },
          error: (error: { error: { message: any; }; }) => {
            console.error("error" + JSON.stringify(error));
            this.isOpInProgress = false;
            this.showMessage({ severity: 'error', summary: error.error.message });

          }
        });
      }
    }
  }clearDialogMessages() {
    throw new Error('Method not implemented.');
  }
showMessage(arg0: { severity: string; summary: string; }) {
    throw new Error('Method not implemented.');
  }
  
  loadTypeDemande() {
    this.typeDemandeService.findAll().subscribe((response: { body: any; }) => {

      this.typeDemandes = response.body!;
    }, (error: { error: any; }) => {
      this.message = { severity: 'error', summary: error.error };
      console.error(JSON.stringify(error));
    });
  }
  
}