import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    plafondAnnee?: number;
    piece?: IPiece[],
    typeDemandeur?: string

}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public typeDemandeur?: string,
        public plafondAnnee?: number,
        public piece?: IPiece[]
    ) { }


}

export enum ECategorie {
    DETACHEMENT = 'DETACHEMENT',
    DISPONIBILITE = 'DISPONIBILITE',
  }
