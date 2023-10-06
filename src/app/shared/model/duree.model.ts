export interface IDuree{
    id?: number;
   annee?: string;
   mois?: string
}


export class Duree implements IDuree{
    constructor(
        public id?: number, 
        public annee?: string,
        public mois?: string
    ){}
}