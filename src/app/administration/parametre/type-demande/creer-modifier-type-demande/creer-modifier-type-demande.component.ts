import {Component, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, LazyLoadEvent, Message} from "primeng/api";
import {cloneDeep} from "lodash";
import {HttpErrorResponse} from "@angular/common/http";
import {ITypeDemande, TypeDemande} from "../../../../shared/model/typeDemande.model";
import {TypeDemandeService} from "../../../../shared/service/type-demande.service";

@Component({
  selector: 'app-creer-modifier-type-demande',
  templateUrl: './creer-modifier-type-demande.component.html',
  styleUrls: ['./creer-modifier-type-demande.component.scss']
})
export class CreerModifierTypeDemandeComponent {
    @ViewChild('dtf') form!: NgForm;
    typeDemande: ITypeDemande = new TypeDemande();
    @Input() data: ITypeDemande = new TypeDemande();
    error: string | undefined;
    showDialog = false;
    isDialogOpInProgress!: boolean;
    message: any;
    dialogErrorMessage: any;
    timeoutHandle: any;
    isOpInProgress!: boolean;

    constructor(
        private typeStructureService: TypeDemandeService,
        private dialogRef: DynamicDialogRef,
        private dynamicDialog: DynamicDialogConfig,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit(): void {
        if (this.dynamicDialog.data) {
            this.typeDemande = cloneDeep(this.dynamicDialog.data);
        }
    }
    clear(): void {
        this.form.resetForm();
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
    isEditing() {
        return !!this.typeDemande.id;
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
        if (this.typeDemande) {
            if (this.typeDemande.id) {
                this.typeStructureService.update(this.typeDemande).subscribe(
                    {
                        next: (response) => {
                            this.dialogRef.close(response);
                            this.dialogRef.destroy();
                            this.showMessage({ severity: 'success', summary: 'structure modifié avec succès' });

                        },
                        error: (error) => {
                            console.error("error" + JSON.stringify(error));
                            this.isOpInProgress = false;
                            this.showMessage({ severity: 'error', summary: error.error.message });

                        }
                    });
            } else {
                this.typeStructureService.create(this.typeDemande).subscribe({
                    next: (response) => {
                        this.dialogRef.close(response);
                        this.dialogRef.destroy();
                        this.showMessage({
                            severity: 'success',
                            summary: 'type demande creer avec succès',
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
    }
}
