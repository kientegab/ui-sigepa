import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    categorie?: string;
    plafondAnnee?: number;
    piece?: IPiece[];
    typeDemandeur?: string
    

}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public categorie?: string,
        public plafondAnnee?: number,
        public piece?: IPiece[],
        public typeDemandeur?: string
    ) { }


}

export enum TypeDemandeur {
    AGENT = 'AGENT',
    STRUCTURE = 'STRUCTURE',
  }
