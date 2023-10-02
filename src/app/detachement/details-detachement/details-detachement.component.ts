import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Message } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { AviserDetachementComponent } from '../aviser-detachement/aviser-detachement.component';
import { AviserDisponibiliteComponent } from 'src/app/disponibilite/aviser-disponibilite/aviser-disponibilite.component';
import { IDemande, Demande } from 'src/app/shared/model/demande.model';

@Component({
  selector: 'app-details-detachement',
  templateUrl: './details-detachement.component.html',
  styleUrls: ['./details-detachement.component.scss']
})
export class DetailsDetachementComponent {

  demande: IDemande = new Demande();
  @Input() data: IDemande = new Demande();
  isOpInProgress!: boolean;
  isDialogOpInProgress!: boolean;
  showDialog = false;
  message: any;
  timeoutHandle: any;
  demandes: any;

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
    private dialogService: DialogService,
) {}


  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.demande = cloneDeep(this.dynamicDialog.data);
    }
  }

  /** Permet d'afficher un modal pour la reception */
  openModalReceptionner(demande: IDemande): void {
    this.dialogService.open(AviserDisponibiliteComponent,
      {
        header: 'Receptionner une demande',
        width: '60%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        closable: true,
        data: demande
      }).onClose.subscribe(result => {
        if(result){
          this.isDialogOpInProgress = false;
          this.showMessage({ severity: 'success', summary: 'Demande receptionnée avec succès' });
        }

      });

  }

  showMessage(message: Message) {
    this.message = message;
    this.timeoutHandle = setTimeout(() => {
      this.message = null;
    }, 5000);
  }

  clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }

  /** Permet d'afficher un modal pour l'ajout */
  openModalCreate(): void {
    this.dialogService.open(AviserDetachementComponent,
      {
        header: 'Aviser une demande',
        width: '60%',
        contentStyle: { overflow: 'auto', },
        baseZIndex: 10000,
        maximizable: true,
        closable: true,
      }
    ).onClose.subscribe(result => {
      if(result) {
      this.demandes.push(result);
      this.isDialogOpInProgress = false;
      this.showMessage({ severity: 'success', summary: 'Demande créée avec succès' });
      }
    });
  }
}
