import { ICommune } from "./commune.model";

export class IArrondissement{
    id?: number;
    code?: string;
    libelle?: string;
    commune?: ICommune;
}

export class Arrondissement implements IArrondissement{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string,
        public commune?: ICommune){}
}