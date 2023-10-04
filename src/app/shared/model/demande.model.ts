import { IAgent } from "./agent.model";
import { IHistorique } from "./historique.model";
import { IPieceJointe } from "./pieceJointe.model";
import { IStructure } from "./structure.model";
import { ITypeDemande } from "./typeDemande.model";

export interface IDemande {
    id?: number;
    dateEffet?: Date;
    typeDemandeur?: TypeDemandeur;
    typeDemande?: ITypeDemande;
    numero?: string;
    dateDemande?: Date;
    strucDestination?: IStructure;
    statut?: String;
    pieceJointe?: IPieceJointe[];
    agent?: IAgent;
    historique?: IHistorique;
}

export class Demande implements IDemande {
    constructor(
        public id?: number,
        public dateEffet?: Date,
        public typeDemandeur?: TypeDemandeur,
        public typeDemande?: ITypeDemande,
        public numero?: string,
        public dateDemande?: Date,
        public strucDestination?: IStructure,
        public statut?: String,
        public pieceJointe?: IPieceJointe[],
        public agent?: IAgent,
        public historique?: IHistorique,

    ){}

}

export enum TypeDemandeur {
    Agent = 'agent',
    Structure = 'structure',
  }
// export interface GetAllTypeDemandeResponse {
//     typeDemandes: ITypeDemande[];
// }
