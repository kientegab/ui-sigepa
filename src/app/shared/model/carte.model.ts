import { IAssure } from "./assure";

export interface ICarte { 
    id?: number; 
    numero?: string ; // Numéro de la carte 
    active?: boolean; // La carte est active ou non 
    valide?: boolean;  // La carte est valide ou non
    date?: Date; // date d'impression de la carte
    typeCarte?: string; 
    assure?: IAssure;
}

export class Carte implements ICarte {
    constructor(
        public id?: number,
        public numero?: string,
        public active?: boolean,
        public valide?: boolean,
        public date?: Date,
        public typeCarte?: string,
        public assure?: IAssure
    ){}
};
