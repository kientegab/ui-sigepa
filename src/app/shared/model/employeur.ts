export interface IEmployeur {
    id?: number;
    numAffiliation?: number;
    libelle?: string;

}
export interface Employeure {
    id?: number;
    code?: number;
    libelle?: string;

}

export class Employeur implements IEmployeur {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string
    ){}
}
