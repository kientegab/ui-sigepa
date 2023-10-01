import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { AviserDisponibiliteComponent } from 'src/app/disponibilite/aviser-disponibilite/aviser-disponibilite.component';
import { IDemande, Demande } from 'src/app/shared/model/demande.model';
import { AviserDetachementComponent } from '../aviser-detachement/aviser-detachement.component';

@Component({
  selector: 'app-details-detachement',
  templateUrl: './details-detachement.component.html',
  styleUrls: ['./details-detachement.component.scss']
})
export class DetailsDetachementComponent {
  demande: IDemande = new Demande();
  @Input() data: IDemande = new Demande();
  demandes: any;
  isDialogOpInProgress: boolean | undefined;
  showMessage: any;

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
