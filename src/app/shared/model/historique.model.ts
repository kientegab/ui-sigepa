import { Circuit } from "./circuit.model";
import { Structure } from "./structure.model";

export interface IHistorique {
    id?: number;
    date?: Date;
    commentaire?: string;
    avis?: avis;
    circuit?: Circuit;
    
}

export class Historique implements IHistorique {
    constructor(
        public id?: number,
        public date?: Date,
        public commentaire?: string,
        public avis?: avis,
        public circuit?: Circuit,
       
    ) {
    }
  

}
export enum avis {
    avis1 = 'Avis favorable',
avis2 = 'Avis defavorable',
  }
