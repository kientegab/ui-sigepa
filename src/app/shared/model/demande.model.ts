import { IAgent } from "./agent.model";
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
    structDestination?: IStructure;
    Status?: String;
    pieceJointe?: IPieceJointe[];
    agent?: IAgent
}

export class Demande implements IDemande {
    constructor(
        public id?: number,
        public dateEffet?: Date,
        public typeDemandeur?: TypeDemandeur,
        public typeDemande?: ITypeDemande,
        public numero?: string,
        public dateDemande?: Date,
        public structDestination?: IStructure,
        public Status?: String,
        public pieceJointe?: IPieceJointe[],
        public agent?: IAgent

    ){
    }

}

export enum TypeDemandeur {
    Agent = 'agent',
    Structure = 'structure',
  }
// export interface GetAllTypeDemandeResponse {
//     typeDemandes: ITypeDemande[];
// }
