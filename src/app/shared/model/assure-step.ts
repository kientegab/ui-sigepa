import { Region } from "./region.model";

export interface IAssureStep {
    id?: number;
    nom?: string;
    nomJeuneFille?: string;
    prenom?: string;
    dateNaissance?: Date;
    lieuNaissance?: string;
    nomMere?: string;
    prenomMere?: string;
    nomPere?: string;
    prenomPere?: string;
    email?: string;
    telephone?: string;
    genre?: string;
    lienParente?: string;
    preuveLien?: string;


    adresse?: string;
    region?: Region;
}

export class AssureStep implements IAssureStep{
    constructor(
        public id?: number,
        public nom?: string,
        public prenom?: string,
        public lieuNaissance?: string,
        telephone?: string,
        public adresse?: string
    ){}
}
