import { IAgent } from "./agent.model";
import { IHistorique } from "./historique.model";
import { IMotif } from "./motif.model";
import { IPieceJointe } from "./pieceJointe.model";
import { IStructure } from "./structure.model";
import { ITypeDemande } from "./typeDemande.model";

export interface IDemande {
    id?: number;
    dateEffet?: Date;
    // typeDemandeur?: TypeDemandeur;
    typeDemande?: ITypeDemande;
    numero?: string;
    dateDemande?: Date;
    strucDestination?: IStructure;
    statut?: String;
    pieceJointe?: IPieceJointe[];
    agent?: IAgent;
    historiques?: IHistorique[];
    motifDTOs?: IMotif
}

export class Demande implements IDemande {
    constructor(
        public id?: number,
        public dateEffet?: Date,
        // public typeDemandeur?: TypeDemandeur,
        public typeDemande?: ITypeDemande,
        public numero?: string,
        public dateDemande?: Date,
        public strucDestination?: IStructure,
        public statut?: String,
        public pieceJointe?: IPieceJointe[],
        public agent?: IAgent,
        public historiques?: IHistorique[],

    ){}

}


// export interface GetAllTypeDemandeResponse {
//     typeDemandes: ITypeDemande[];
// }
