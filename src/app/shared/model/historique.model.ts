import { Circuit } from "./circuit.model";
import { Structure } from "./structure.model";

export interface IHistorique {
    id?: number;
    date?: Date;
    commentaire?: string;
    avis?: string;
    circuit?: Circuit;
    
}

export class Historique implements IHistorique {
    constructor(
        public id?: number,
        public date?: Date,
        public commentaire?: string,
        public avis?: string,
        public circuit?: Circuit,
       
    ) {
    }
}

