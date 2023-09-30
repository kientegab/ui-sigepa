
export class IPieceJointe {
    id?: number;
    libelle?:string;
    url?:string;
}

export class pieceJointe implements IPieceJointe {
    constructor(
       public id?: number,
       public libelle?:string,
       public url?:string
    ) { }
}