export interface IDuree{
    id?: number;
   annee?: number;
   mois?: number;
   jour?: number
}


export class Duree implements IDuree{
    constructor(
        public id?: number, 
        public annee?: number,
        public mois?: number,
        public jour?: number
    ){}
}