
export interface IPiecesFourniesDTO{

  file?: File;
 libelle?: string;
}

export class PiecesFourniesDTO implements IPiecesFourniesDTO{
    constructor(
        public  file?: File,
        public libelle?: string
    ){}
}