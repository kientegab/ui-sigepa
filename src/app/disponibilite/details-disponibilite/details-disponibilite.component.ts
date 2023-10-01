import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { IDemande, Demande } from 'src/app/shared/model/demande.model';
import { AviserDisponibiliteComponent } from '../aviser-disponibilite/aviser-disponibilite.component';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-details-disponibilite',
  templateUrl: './details-disponibilite.component.html',
  styleUrls: ['./details-disponibilite.component.scss']
})
export class DetailsDisponibiliteComponent {

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
    this.dialogService.open(AviserDisponibiliteComponent,
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
