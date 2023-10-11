import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    plafondAnnee?: number;
    duree?:number;
    typeDemandeur?:string;
    typeDemandeurDto?: TypeDemandeur

}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public plafondAnnee?: number,
        public duree?: number,
        public typeDemandeur?: string,
        public typeDemandeurDto?: TypeDemandeur
    ) { }


}

export enum TypeDemandeur {
    AGENT = 'AGENT',
    STRUCTURE = 'STRUCTURE',
  }
