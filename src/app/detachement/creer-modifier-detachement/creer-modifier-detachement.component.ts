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
import { IMotif } from 'src/app/shared/model/motif.model';
import { MotifService } from 'src/app/shared/service/motif.service';
import { Agent, IAgent } from 'src/app/shared/model/agent.model';
import { StructureService } from 'src/app/shared/service/structure.service';
import { AgentService } from 'src/app/shared/service/agent.service';

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
    selectedMotif: IMotif | undefined;
    selectedPieces: IPiece[] = [];
    multiple=true;
    motifs: IMotif[] = [];
    agent: IAgent  = new Agent ();
    numeroMatricule: string = '';

    agentInfo: any; // C'est où vous stockerez les informations de l'agent
    isFetchingAgentInfo: boolean = false; // Pour gérer l'état de chargement

    uploadedFiles: any[] = [];

    onFileChange(event: any, pieceJointe: string) {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            // Vous pouvez stocker le fichier sélectionné dans le modèle
            // this[pieceJointe].fichier = fileList[0];
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
motifWithPieces: { motif: string, pieces: IPiece[] }[] = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


onTypeDemandeChange() {
 
  if (this.demande.typeDemande && this.demande.typeDemande.motifDTOs) {
    this.motifs = this.demande.typeDemande.motifDTOs;
    this.selectedMotif = undefined; 
  } else {
    this.motifs = []; 
    this.selectedMotif = undefined; 
  }
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
onMotifChange() {
  if (this.selectedMotif) {
    if (this.demande.typeDemande) {
      const motif = this.demande.typeDemande.motifDTOs?.find((m: IMotif) => m.libelle === this.selectedMotif?.libelle);

      if (motif) {
        this.selectedPieces = motif.piece || [];
      } else {
        this.selectedPieces = [];
      }
    }
  } else {
    this.selectedPieces = [];
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

onChangeMatricule() {
    if (this.numeroMatricule) {
      this.isFetchingAgentInfo = true; // Activez l'indicateur de chargement
      console.warn("agent================================================",this.agent)
      console.warn("agent================================================",this.agentInfo)
      // Faites une requête au service pour obtenir les informations de l'agent en utilisant this.numeroMatricule
      this.agentService.getAgentInfoByMatricule(this.numeroMatricule)
        .subscribe(
          (response) => {
            
          console.warn("agent================================================",this.agent)
          console.warn("agent================================================",this.agentInfo)
            
            // Vérifiez que la réponse est réussie
            if (response && response.body) {
              this.agent = response.body;
              this.isFetchingAgentInfo = false; // Désactivez l'indicateur de chargement une fois les données obtenues
              console.warn("agent================================================",this.agent)
              console.warn("agent================================================",this.agentInfo)
            } else {
              console.error("Erreur lors de la récupération des informations de l'agent", response);
              this.isFetchingAgentInfo = false; // Désactivez l'indicateur de chargement en cas d'erreur
              
            }
          },
          (error: any) => {
            console.error("Erreur lors de la récupération des informations de l'agent", error);
            this.isFetchingAgentInfo = false; // Désactivez l'indicateur de chargement en cas d'erreur
          }
        );
    } else {
      console.warn("agent================================================",this.agent)
      console.warn("agent================================================",this.agentInfo)
      // Réinitialisez les informations de l'agent si le numéro matricule est vide
      this.agent = new Agent();
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    onSelectFile(event: any): void {
        console.log(event.target.files[0]);
        this.file = event.target.files[0];
    }


    constructor(
        private demandeService: DemandeService,
        private dialogRef: DynamicDialogRef,
        private typeDemandeService: TypeDemandeService,
        private motifService: MotifService,
        // private dynamicDialog: DynamicDialogConfig,
        private confirmationService: ConfirmationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private structureService: StructureService,
        private agentService: AgentService,
    ) { }

    ngOnInit(): void {

        // if (this.dynamicDialog.data) {
        //   this.demande = cloneDeep(this.dynamicDialog.data);
        // }
        if (!this.agent.structure) {
            this.agent.structure = { libelle: '' };
          }
        
          // Assurez-vous que libelle est défini
          if (!this.agent.structure.libelle) {
            this.agent.structure.libelle = '';
          }
      
          
          
          this.loadTypeDemande();
          // this.loadAgent();
         this.loadMotif('');
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

    loadMotif(typeDemande: string) {
        this.motifService.findAll().subscribe(response => {
          this.motifs = response.body!;
          
          this.motifWithPieces = this.motifs.map((motif: IMotif) => ({
            motif: motif.libelle!,
            pieces: [] 
          }));
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
