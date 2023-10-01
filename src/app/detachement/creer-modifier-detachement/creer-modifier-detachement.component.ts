import {Component, Input} from '@angular/core';
import {Demande, IDemande, TypeDemandeur} from "../../shared/model/demande.model";
import {ITypeDemande} from "../../shared/model/typeDemande.model";
import {IPiece} from "../../shared/model/piece.model";
import {DemandeService} from "../../shared/service/demande-service.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {TypeDemandeService} from "../../shared/service/type-demande.service";
import {ConfirmationService, Message, SelectItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-creer-modifier-detachement',
  templateUrl: './creer-modifier-detachement.component.html',
  styleUrls: ['./creer-modifier-detachement.component.scss']
})
export class CreerModifierDetachementComponent {
    demande: IDemande = new Demande();
    @Input() data: IDemande = new Demande();
    demandes: IDemande[]=[];
    error: string | undefined;
    showDialog = false;
    isDialogOpInProgress!: boolean;
    message: any;
    dialogErrorMessage: any;
    timeoutHandle: any;
    isOpInProgress!: boolean;
    typeDemandes: ITypeDemande[]=[];
    pieces: IPiece[] = [];
    file: Blob | string = '';
    selectedFile: File | null = null;
    multiple=true;

    uploadedFiles: any[] = [];

    onFileChange(event: any, pieceJointe: string) {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            // Vous pouvez stocker le fichier sélectionné dans le modèle
            // this[pieceJointe].fichier = fileList[0];
        }
    }


    onSelectFile(event: any): void {
        console.log(event.target.files[0]);
        this.file = event.target.files[0];
    }


    constructor(
        private demandeService: DemandeService,
        private dialogRef: DynamicDialogRef,
        private typeDemandeService: TypeDemandeService,
        // private dynamicDialog: DynamicDialogConfig,
        private confirmationService: ConfirmationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {

        // if (this.dynamicDialog.data) {
        //   this.demande = cloneDeep(this.dynamicDialog.data);
        // }
        this.loadTypeDemande();
    }

    typeDemandeur: SelectItem[] = [
        { label: 'Agent', value: TypeDemandeur.Agent },
        { label: 'Structure', value: TypeDemandeur.Structure },
    ];

    displayCalendar = false;

    openCalendar() {
        this.displayCalendar = true;
    }

    loadTypeDemande() {
        this.typeDemandeService.findAll().subscribe(response => {

            this.typeDemandes = response.body!;
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }



    clear(): void {
        // this.form.resetForm();
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
    isEditing() {
        return !!this.demande.id;
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
        if (this.demande) {
            if (this.demande.id) {
                this.demandeService.update(this.demande).subscribe(
                    {
                        next: (response) => {
                            this.dialogRef.close(response);
                            this.dialogRef.destroy();
                            this.showMessage({ severity: 'success', summary: 'demande modifié avec succès' });

                        },
                        error: (error) => {
                            console.error("error" + JSON.stringify(error));
                            this.isOpInProgress = false;
                            this.showMessage({ severity: 'error', summary: error.error.message });

                        }
                    });
            } else {
                this.demandeService.create(this.demande).subscribe({
                    next: (response) => {
                        this.dialogRef.close(response);
                        this.dialogRef.destroy();
                        this.showMessage({
                            severity: 'success',
                            summary: 'demande creer avec succès',
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

    onUpload($event: any) {

    }
}
