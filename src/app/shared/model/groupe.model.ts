//A changer pour mettre divion à la place
import { IActivite } from "./activite.model";
import { Division } from "./division.model";

export class IGroupe{
    id?: number;
    code?: string;
    libelle?: string;
   // activites?: IActivite[];
    division?: Division;
}

export class Groupe implements IGroupe{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string,
        //public activites?: IActivite[],
        public division?: Division
        ){}
}
export interface GetAllGroupeResponse {
    groupes: IGroupe[];
}