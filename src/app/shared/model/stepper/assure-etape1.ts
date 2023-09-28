import { TypesAssure } from "../typesAssures.model";
import {SituationMatrimoniale} from "../situationMatrimoniale.model";

export interface IAssureEtape1 {

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
    numeroAffiliation?: string;   // a changer
    refExtraitNaissance?: string;   // a changer
    dateExtraitDeNaissance?: Date;   // a changer
    refDocument?: string;   // a changer
    dateEtablissementDocument?: Date;   // a changer
    observation?: string;   // a changer

    nationalite?: string;  //faire un json
    situationMatrimoniale?: String;     //faire un json
    adresse?: string;
    principal?: boolean;
    immAssureP?: string;
    groupeSanguin?: string;
}

export class AssureEtape1 implements IAssureEtape1{
    constructor(
        public adresse?: string,
        public telephone?: string,
        public principal?: boolean

    ){}
}
