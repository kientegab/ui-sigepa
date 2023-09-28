import { Groupe } from "./groupe.model";

export class IClasse{
    id?: number;
    code?: string;
    libelle?: string;
    estActif?: boolean;
    groupe?: Groupe;
}

export class Classe implements IClasse{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string,
        public estActif?: boolean,
        public groupe?: Groupe){}
}
export interface GetAllClasseResponse {
    classes: IClasse[];
}