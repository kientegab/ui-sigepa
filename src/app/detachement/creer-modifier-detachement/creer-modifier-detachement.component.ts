import {Component, Input} from '@angular/core';
import {Demande, IDemande} from "../../shared/model/demande.model";
import {ITypeDemande} from "../../shared/model/typeDemande.model";
import {IPiece, Piece} from "../../shared/model/piece.model";
import {DemandeService} from "../../shared/service/demande-service.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {TypeDemandeService} from "../../shared/service/type-demande.service";
import {ConfirmationService, Message, SelectItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { IMotif, Motif} from 'src/app/shared/model/motif.model';
import { MotifService } from 'src/app/shared/service/motif.service';
import { Agent, IAgent } from 'src/app/shared/model/agent.model';
import { StructureService } from 'src/app/shared/service/structure.service';
import { AgentService } from 'src/app/shared/service/agent.service';
import { cloneDeep } from 'lodash';
import { ITypeDemandeur } from 'src/app/shared/model/typeDemandeur.model';
import { PieceService } from 'src/app/shared/service/piece.service';
import { IPiecesFourniesDTO, PiecesFourniesDTO } from 'src/app/shared/model/piecesFourniesDTO.model';
import { IStructure } from 'src/app/shared/model/structure.model';
import { Duree, IDuree } from 'src/app/shared/model/duree.model';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
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
    fichier: Blob | string = '';
    listePieceFournies:  IPiecesFourniesDTO[] = [];
    structures: IStructure [] = [];
    selectedFile: File | null = null;
    selectedTypeMotif?:IMotif;
    selectedMotif: IMotif | undefined;
    selectedPiece: IPiece | undefined;
    selectedPieces: IPiece[] = [];
    multiple=true;
    motifs: IMotif[] = [];
    selectedTypeDemandeur?: ITypeDemandeur;
    duree: IDuree = new Duree();
    typeDemandeurs: ITypeDemandeur[]=[{
        code:'AGENT',
        libelle: 'AGENT'
    },
    {
        code:'STRUCTURE',
        libelle: 'STRUCTURE'
    }];

   



   // motifs: IMotif[] = [];

 
 
    agent: IAgent  = new Agent ();
    matricule: string = '';

    agentInfo: any; // C'est où vous stockerez les informations de l'agent
    isFetchingAgentInfo: boolean = false; // Pour gérer l'état de chargement

    uploadedFiles: any[] = [];

    // onFileChange(event: any, pieceJointe: string) {
    //     const fileList: FileList = event.target.files;
    //     if (fileList.length > 0) {
    //         // Vous pouvez stocker le fichier sélectionné dans le modèle
    //         // this[pieceJointe].fichier = fileList[0];
    //     }
    // }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
motifWithPieces: { motif: string, pieces: IPiece[] }[] = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// typeDemandeur: SelectItem[] = [
//     { label: 'AGENT', value: TypeDemandeur.AGENT },
//     { label: 'STRUCTURE', value: TypeDemandeur.STRUCTURE },
//   ];



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// onTypeDemandeChange() {
 
//   if (this.demande.typeDemande && this.demande.typeDemande.motifDTOs) {
//     this.motifs = this.demande.typeDemande.motifDTOs;
//     this.selectedMotif = undefined; 
//   } else {
//     this.motifs = []; 
//     this.selectedMotif = undefined; 
//   }
// }

// onTypeDemandeurChange() {
 
//     if (this.demande.typeDemandeur ) {
//       this.demande.motifDTOs = this.demande.typeDemande.motifDTOs;
//       this.selectedMotif = undefined; 
//     } else {
//       this.motifs = []; 
//       this.selectedMotif = undefined; 
//     }
//   }

motifsFiltres: IMotif[] = [];
piecesFilters: IPiece[] = [];



  
  
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onMotifChange() {
//     if (this.selectedMotif) {
//       if (this.demande.typeDemande) {
//         const motif = this.demande.typeDemande.motifDTOs?.find((m: IMotif) => m.libelle === this.selectedMotif?.libelle);
  
//         if (motif) {
//           this.selectedPieces = motif.piece || [];
//         } else {
//           this.selectedPieces = [];
//         }
//       }
//     } else {
//       this.selectedPieces = [];
//     }
//   }
loadPieces() {

    this.pieceService.findAll().subscribe(response => {
        this.pieces= cloneDeep(response.body!)
        // this.pieces = response.body!;
    }, error => {
        this.message = { severity: 'error', summary: error.error };
        console.error(JSON.stringify(error));
    });



}
  
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

onChangeMatricule() {
    if (this.matricule) {
      this.isFetchingAgentInfo = true; // Activez l'indicateur de chargement
      console.warn("agent================================================",this.agent)
      console.warn("agent================================================",this.agentInfo)
      // Faites une requête au service pour obtenir les informations de l'agent en utilisant this.matricule
      this.agentService.getAgentInfoByMatricule(this.matricule)
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
    onSelectFile($event: any, piece: Piece): void {
        console.log($event.target.files[0]);
        this.file = $event.target.files[0];
        console.warn("test event===============",$event.target.files[0])
        console.warn("test piece===============",piece)
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
        private pieceService: PieceService,
        private agentService: AgentService,
        private http: HttpClient
    ) { }

    ngOnInit(): void {

        // if (this.dynamicDialog.data) {
        //   this.demande = cloneDeep(this.dynamicDialog.data);
        // }

        

        if (!this.agent.structure) {
            this.agent.structure = { libelle: '' };
          }
        
          
        if (!this.demande.structure) {
          this.agent.structure = { libelle: '' };
        }


          if (!this.agent.superieurHierarchique) {
            this.agent.superieurHierarchique = { nom: '' };
          }
        

          if (!this.agent.structure.ministere) {
            this.agent.structure.ministere = { libelle: '' };
          }
          // Assurez-vous que libelle est défini
          if (!this.agent.structure.libelle) {
            this.agent.structure.libelle = '';
          }
      
         
       
          this.loadStructure();

          this.loadPieces();
          
          this.loadTypeDemande();
          // this.loadAgent();
         this.loadMotif();
        this.loadTypeDemande();

        
        
    }

    onTypeDemandeurChange(): void {
        // this.loadMotif();
        if (this.selectedTypeDemandeur) {
          // Filtrer les motifs en fonction du typeDemandeur sélectionné

          console.warn("==============================================",this.selectedTypeDemandeur)
         
          this.motifsFiltres = this.motifs.filter((motif) => motif.typeDemandeur === this.selectedTypeDemandeur?.libelle);


          console.warn("Motifs filtrés==============================================",this.motifs)
          // Réinitialiser le motif sélectionné lorsque le type de demandeur change
          this.selectedMotif = undefined;
        } else {
          // Effacer la liste des motifs filtrés si aucun type de demandeur n'est sélectionné
          this.motifsFiltres = [];
      
          // Réinitialiser le motif sélectionné
          this.selectedMotif = undefined;
        }
      }

      onMotifChange(): void {
        if (this.selectedMotif) {
            // const motif = this.demande.motifDTOs?.libelle === this.selectedMotif?.libelle;
            // console.warn("==============================================",this.selectedTypeMotif)
            console.warn("==============================================",this.pieces);

            this.piecesFilters = this.pieces.filter((piece) => piece.motif?.libelle === this.selectedMotif?.libelle);

            console.warn("pieces==============================================",this.piecesFilters);
      
            this.selectedPiece= undefined
        
        } else {
            
          this.piecesFilters = [];
          this.selectedPiece = undefined;
        }
        
      }
      
      
    //   onMotifChange(): void {
    //     // if (this.selectedMotif) {
    //     // //   const motif = this.motifsFiltres.find((m) => m.libelle === this.selectedMotif!.libelle);
    //     // this.piecesFilters = this.pieces.filter((piece) => piece. === this.selectedTypeDemandeur?.libelle);
    //     //   if (motif) {
    //     //     console.log('Libellé du motif sélectionné : ' + motif.libelle);
    //     //   }
    //     // } else {
    //     //   console.log('Aucun motif sélectionné');
    //     // }
    //   }


    // onTypeDemandeurChange(): void {
    //     if (this.demande.typeDemandeur) {
    //       this.motifsFiltres = this.motifs.filter(
    //         (motif) => motif.typeDemandeur === this.demande.typeDemandeur
    //       );
    //     } else {
    //       this.motifsFiltres = [];
    //     }
    //   }
      

    displayCalendar = true;

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

    loadStructure() {
      this.structureService.findListe().subscribe(response => {

          this.structures = response.body!;

          console.warn("Structures================",this.structures)
      }, error => {
          this.message = { severity: 'error', summary: error.error };
          console.error(JSON.stringify(error));
      });
  }



    // loadMotif() {
    //     this.motifService.findAll().subscribe(response => {

    //         this.motifService = response.body!;
    //     }, error => {
    //         this.message = { severity: 'error', summary: error.error };
    //         console.error(JSON.stringify(error));
    //     });
    // }

    
  loadMotif() {

    this.motifService.findAll().subscribe(response => {
      this.motifsFiltres = response.body!;
      this.motifs = cloneDeep(this.motifsFiltres)
      this.motifWithPieces = this.motifs.map((motif: IMotif) => ({
        motif: motif.libelle!,
        pieces: [] 
      }));
    }, error => {
      this.message = { severity: 'error', summary: error.error };
      console.error(JSON.stringify(error));
    });

    // const motif1 = new Motif();
    // motif1.libelle = "test1"
    // motif1.typeDemandeur= "AGENT"


    // const motif2 = new Motif();
    // motif2.libelle = "TEST2"
    // motif2.typeDemandeur= "STRUCTURE"

    // this.motifsFiltres.push(motif1);
    // this.motifsFiltres.push(motif2);
    // this.motifs = cloneDeep(this.motifsFiltres)
  }





    // loadMotif(typeDemande: string) {
    //     this.motifService.findAll().subscribe(response => {
    //       this.motifs = response.body!;
          
    //       this.motifWithPieces = this.motifs.map((motif: IMotif) => ({
    //         motif: motif.libelle!,
    //         pieces: [] 
    //       }));
    //     }, error => {
    //       this.message = { severity: 'error', summary: error.error };
    //       console.error(JSON.stringify(error));
    //     });
    //   }


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

    onFileChange(event: any, piece: Piece): void {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const piecesFourniesDTO = new PiecesFourniesDTO();
        piecesFourniesDTO.libelle = piece.libelle;
  
        // Vérifiez si fileList[0] est défini avant d'affecter à piecesFourniesDTO.file
        if (fileList[0]) {
          piecesFourniesDTO.file = fileList[0];
          this.listePieceFournies.push(piecesFourniesDTO);
        }
      }
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// save(): void {
//   this.clearDialogMessages();
//   this.isDialogOpInProgress = true;

//   if (this.demande) {
//     this.demande.agent = this.agent;
//     this.demande.piecesFourniesDTO = this.listePieceFournies;
//     // Créez un objet FormData pour envoyer les données
//     const formData = new FormData();
//     // Ajoutez les données de la demande au FormData
//     formData.append('demande', JSON.stringify(this.demande));

//     // Ajoutez chaque pièce fournie au FormData
//     for (const pieceFournie of this.listePieceFournies) {
//       if (pieceFournie.file) { // Vérifiez si file est défini
//         formData.append('files', pieceFournie.file, pieceFournie.libelle);
//       }
//     }
//     // Envoyez la demande au backend avec le bon en-tête Content-Type
//     this.http.post('http://localhost:8081/api/demandes/new', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' }
//     }).subscribe({
//       next: (response) => {
//         // Traitement de la réponse
//       },
//       error: (error) => {
//         console.error("error" + JSON.stringify(error));
//       },
//     });
//   }
// }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    saveEntity(): void {

        this.clearDialogMessages();
        this.isDialogOpInProgress = true;
        if (this.demande) {
            this.demande.agent= this.agent;
            // this.demande.piecesFourniesDTO= this.listePieceFournies;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            this.demande.duree = this.duree
            console.warn("==============================================",this.demande);
            this.demande.motif = this.selectedMotif;
            if (this.demande.id) {
                this.demandeService.update(this.demande).subscribe(
                    {
                        next: (response) => {
                            this.dialogRef.close(response);
                            this.dialogRef.destroy();
                            this.showMessage({ severity: 'success', summary: 'demande modifié avec succès' });

                            this.isDialogOpInProgress = false;
                        },
                        error: (error) => {
                            console.error("error" + JSON.stringify(error));
                            this.isOpInProgress = false;
                            this.isDialogOpInProgress = false;
                            this.showMessage({ severity: 'error', summary: error.error.message });

                        }
                    });
            } else {
                this.demandeService.create(this.demande).subscribe({
                    next: (response) => {
                        this.dialogRef.close(response);
                        this.dialogRef.destroy();
                        this.router.navigate(['detachements']);
                        this.showMessage({
                            severity: 'success',
                            summary: 'demande creer avec succès',
                            
                        });
                        this.isDialogOpInProgress = false;
                    },
                    error: (error) => {
                        console.error("error" + JSON.stringify(error));
                        this.isOpInProgress = false;
                        this.isDialogOpInProgress = false;
                        this.showMessage({ severity: 'error', summary: error.error.message });

                    }
                });
            }
        }
    }

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  saveEntity(): void {
//   this.clearDialogMessages();
//   this.isDialogOpInProgress = true;

//   if (this.demande) {
//     this.demande.agent = this.agent;
//     this.demande.piecesFourniesDTO = this.listePieceFournies;
    
//     // Créez un objet FormData pour envoyer les données
//     const formData = new FormData();
    
//     // Ajoutez les données de la demande au FormData
//     formData.append('demande', JSON.stringify(this.demande));

//     // Ajoutez chaque pièce fournie au FormData
//     for (const pieceFournie of this.listePieceFournies) {
//       if (pieceFournie.file) { // Vérifiez si file est défini
//         formData.append('files', pieceFournie.file, pieceFournie.libelle);
//       }
//     }

//     // Envoyez la demande au backend avec le bon en-tête Content-Type
//     const headers = new HttpHeaders({
//       'Content-Type': 'multipart/form-data' // Vous pouvez ajouter d'autres en-têtes si nécessaire
//     });

//     // Utilisez HttpClient pour envoyer la demande
//     this.http.post('http://localhost:8081/api/demandes/new', formData, { headers }).subscribe({
//       next: (response) => {
//         // Traitement de la réponse
//         this.isDialogOpInProgress = false;
//       },
//       error: (error) => {
//         console.error("error" + JSON.stringify(error));
//         this.isDialogOpInProgress = false;
//         this.showMessage({ severity: 'error', summary: 'Une erreur s\'est produite lors de la demande' });
//       },
//     });
//   }
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   
    onUpload(event: UploadEvent, piece: Piece) {
      console.warn("============================");
      for (let file of event.files) {
        const piecesFourniesDTO = new PiecesFourniesDTO();
        piecesFourniesDTO.libelle = piece.libelle;
  
        // Vérifiez si file est défini avant d'affecter à piecesFourniesDTO.file
        if (file) {
          piecesFourniesDTO.file = file;
          this.listePieceFournies.push(piecesFourniesDTO);
          this.uploadedFiles.push(file);
        }
      }
      console.warn("============================", this.listePieceFournies);
    }




    // createFile() {

    //   this.demande.agent= this.agent;
    //   this.demande.piecesFourniesDTO= this.listePieceFournies;
    
    //   const formData: FormData = new FormData();
    //   const documentsPosteAsJson: Blob = new Blob([JSON.stringify(this.demande)], { type: 'application/json' });
    //   formData.append('request', documentsPosteAsJson);
      
    //   this.demandeService.save(formData).subscribe(response => {
    //     if (response.body) {
    // // this.document = response.body
    //     }
        
        
    //   })
      
    
    // }
}
