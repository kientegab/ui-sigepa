import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { SelectItem } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IDemande, Demande } from 'src/app/shared/model/demande.model';
import { IHistorique, Historique, avis } from 'src/app/shared/model/historique.model';

@Component({
  selector: 'app-reception-detachement',
  templateUrl: './reception-detachement.component.html',
  styleUrls: ['./reception-detachement.component.scss']
})
export class ReceptionDetachementComponent {

  demande: IDemande = new Demande();
  @Input() data: IDemande = new Demande();
  // demandes: any;
  isDialogOpInProgress: boolean | undefined;
  demandeService: any;
  isOpInProgress: boolean | undefined;
  dialogErrorMessage: any;
  typeDemandeService: any;
  typeDemandes: any;
  message: { severity: string; summary: any; } | undefined;
  historique:IHistorique = new Historique();
  historiques: IHistorique[] = []; 
  
 

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
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

  receptions: SelectItem[] = [
    { label: 'Conforme ', value: avis.avis1 },
    { label: 'Non conforme', value: avis.avis2 }
  ];
 
  // Errors
  handleError(error: HttpErrorResponse) {
    console.error(`Processing Error: ${JSON.stringify(error)}`);
    this.isDialogOpInProgress = false;
    this.dialogErrorMessage = error.error.title;
  }
  
  saveReceptionner(): void {
    this.clearDialogMessages();
    this.isDialogOpInProgress = true;
    if (this.demande) {
        this.historiques.push(this.historique);
        console.log("histo ===========", this.historique);
        this.demande.historiques=this.historiques;
        this.demandeService.update(this.demande).subscribe(
          {
            next: (response: any) => {
              this.dialogRef.close(response);
              this.dialogRef.destroy();
              this.showMessage({ severity: 'success', summary: 'demande receptionnée avec succès' });
             
            },
            error: (error: { error: { message: any; }; }) => {
              console.error("error" + JSON.stringify(error));
              this.isOpInProgress = false;
              this.showMessage({ severity: 'error', summary: error.error.message });

            }
          });
     
    }
  }
  
  clearDialogMessages() {
    this.dialogErrorMessage = null;
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
