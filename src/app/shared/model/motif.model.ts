import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    plafondAnnee?: number;
    typeDemandeur?: TypeDemandeur

}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public plafondAnnee?: number,
        public typeDemandeur?: TypeDemandeur
    ) { }


}

export enum TypeDemandeur {
    AGENT = 'AGENT',
    STRUCTURE = 'STRUCTURE',
  }
