import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    plafondAnnee?: number;


}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public plafondAnnee?: number,
  
    ) { }


}

export enum TypeDemandeur {
    AGENT = 'AGENT',
    STRUCTURE = 'STRUCTURE',
  }
