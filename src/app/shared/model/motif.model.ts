import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    categorie?: ECategorie;
    piece?: IPiece[] 

}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public categorie?: ECategorie,
        public piece?: IPiece[]
    ) { }


}

export enum ECategorie {
    DETACHEMENT = 'DETACHEMENT',
    DISPONIBILITE = 'DISPONIBILITE',
  }