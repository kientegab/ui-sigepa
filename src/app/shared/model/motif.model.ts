import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    categorie?: string;
    plafondAnnee?: number;
    piece?: IPiece[]

}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public categorie?: string,
        public plafondAnnee?: number,
        public piece?: IPiece[]
    ) { }


}

export enum ECategorie {
    DETACHEMENT = 'DETACHEMENT',
    DISPONIBILITE = 'DISPONIBILITE',
  }
