import { IPiece } from "./piece.model";

export interface IMotif {
    id?: number,
    libelle?: string;
    categorie?: string;
    piece?: IPiece[]

}

export class Motif implements IMotif {
    constructor(
        public id?: number,
        public libelle?: string,
        public categorie?: string,
        public piece?: IPiece[]
    ) { }


}
