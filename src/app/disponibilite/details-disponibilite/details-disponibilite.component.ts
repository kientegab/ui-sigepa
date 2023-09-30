import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IDemande, Demande } from 'src/app/shared/model/demande.model';

@Component({
  selector: 'app-details-disponibilite',
  templateUrl: './details-disponibilite.component.html',
  styleUrls: ['./details-disponibilite.component.scss']
})
export class DetailsDisponibiliteComponent {

  demande: IDemande = new Demande();
  @Input() data: IDemande = new Demande();

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

}
