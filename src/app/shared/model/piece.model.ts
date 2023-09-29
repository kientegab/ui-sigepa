

export interface IPiece{
    id?: number;
    libelle?: string;
}

export class Piece implements IPiece{
    constructor(
        public id?: number,
        public libelle?: string
    ){}
}