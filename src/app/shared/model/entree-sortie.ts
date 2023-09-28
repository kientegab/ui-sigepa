import {Employeur} from "./employeur";
import {IAssure} from "./assure";
import {IAffiliationStep} from "./affiliation-step";

export interface IEntreeSortie {
    id?: number;
    employeurId?: number;
    assureeId?: number;
    dateEntree?: Date;
    dateSortie?: Date;
    estSortie?: boolean;
    motif?: string;

}

export class EntreeSortie implements IEntreeSortie {
    constructor(
        public id?: number,
        public employeur?: IAffiliationStep,
        public assure?: IAssure,
        public dateEntree?: Date,
        public dateSortie?: Date,
        public estSortie?: boolean,
        public motif?: string
    ){}
}
