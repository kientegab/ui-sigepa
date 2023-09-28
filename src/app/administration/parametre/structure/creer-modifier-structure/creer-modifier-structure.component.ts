import {Component, Input, ViewChild} from '@angular/core';
import {StructureService} from "../../../../shared/service/structure.service";
import {TypeStructureService} from "../../../../shared/service/type-structure.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, LazyLoadEvent, Message} from "primeng/api";
import {cloneDeep} from "lodash";
import {ITypeStructure} from "../../../../shared/model/typeStructure.model";
import {IStructure, Structure} from "../../../../shared/model/structure.model";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {MinistereService} from "../../../../shared/service/ministere-service";
import {IMinistere} from "../../../../shared/model/ministere.model";

@Component({
  selector: 'app-creer-modifier-structure',
  templateUrl: './creer-modifier-structure.component.html',
  styleUrls: ['./creer-modifier-structure.component.scss']
})
export class CreerModifierStructureComponent {
    @ViewChild('dtf') form!: NgForm;
    structure: IStructure = new Structure();
    @Input() data: IStructure = new Structure();
    structures: IStructure[]=[];
    typeStructures: ITypeStructure[]=[];
    ministeres: IMinistere[] = [];
    error: string | undefined;
    showDialog = false;
    isDialogOpInProgress!: boolean;
    message: any;
    dialogErrorMessage: any;
    timeoutHandle: any;
    isOpInProgress!: boolean;

    constructor(
        private structureService: StructureService,
        private typeStructureService: TypeStructureService,
        private dialogRef: DynamicDialogRef,
        private dynamicDialog: DynamicDialogConfig,
        private confirmationService: ConfirmationService,
        private ministereService: MinistereService
    ) { }

    ngOnInit(): void {
        this.loadTypeStructure();
        this.loadMinistere();
        if (this.dynamicDialog.data) {
            this.structure = cloneDeep(this.dynamicDialog.data);
        }
    }

    loadTypeStructure(event?: LazyLoadEvent) {
        this.typeStructureService.findListe().subscribe(response => {
            this.typeStructures = response.body!;
            console.error("ppp", this.typeStructures)
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }

    loadMinistere(event?: LazyLoadEvent) {
        this.ministereService.findListe().subscribe(response => {
            this.ministeres = response.body!;
            console.error("ppp", this.typeStructures)
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }
    clear(): void {
        this.form.resetForm();
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
    isEditing() {
        return !!this.structure.id;
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
        if (this.structure) {
            if (this.structure.id) {
                this.structureService.update(this.structure).subscribe(
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
                this.structureService.create(this.structure).subscribe({
                    next: (response) => {
                        this.dialogRef.close(response);
                        this.dialogRef.destroy();
                        this.showMessage({
                            severity: 'success',
                            summary: 'structure creer avec succès',
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
