import {SecteurVillage} from "./secteurvillage.model";
import {Emploi} from "./emploi.model";
import {TypesAssure} from "./typesAssures.model";
import {Profession} from "./profession.model";
import {IRegion, Region} from "./region.model";
import {IProvince, Province} from "./province.model";
import {Commune, ICommune} from "./commune.model";
import {Arrondissement, IArrondissement} from "./arrondissement.model";
import {Piece} from "./piece";
import {Photo} from "./photo.model";
import { Employeur } from "./employeur";

export interface IAssure {
    id?: number;
    immatriculation?: string;
    dateImmatriculation?: Date;
    codeSystemeExterne?: string;
    nom?: string;
    prenom?: string;
    nomJeuneFille?: string;
    dateNaissance?: Date;
    dateEmbauche?: Date;
    lieuNaissance?: string;
    nomMere?: string;
    prenomMere?: string;
    nomPere?: string;
    prenomPere?: string;
    preuveLien?: string;
    nationalite?: string;
    salaire?: number;
    genre?: string;
    autreTypeAssure?: string;
    estPrincipal?: boolean;
    lienParente?: string;
    principal?: boolean;
    telephone?: string;
    email?:string;
    nip?:string;
    nomcompletPAPAB?: string;
    groupeSanguin?:string;
    observation?: string; // a creer dans le back
    situationMatrimoniale?: string; //
    secteurVillage?: SecteurVillage;
    secteurVillageId?: number; //
    //emploi?: Emploi[];
    typeAssure?: TypesAssure;
    typeAssureId?: number; //
    assurePrincipalImmatriculation?: string;
   // profession?: Profession;
     professionId?: number; //
     assurePrincipalId?: number; //
    numeroAffiliation?: string;
    immatriculationPrincipal?: string;
    region?: IRegion; // juste pour affichage
    province?: IProvince; // juste pour affichage
    commune?: ICommune; // juste pour affichage
    arrondissement?: IArrondissement;
    pieces?: Piece[];
    photo?: Photo;
    listeAssure?: IAssure[];
    partEmployeur?: number;
    partAssure?: number;
    employeurs?: Employeur[]; //
    emplois?: Emploi[];
    telephonePAPAB?: string;
    //cartes?: any; //  Carte[]
   // photo?: Photo  //
   photoId?: number; //
  /*  salaire?: number;
    genre?: string;
    autreTypeAssure?: string;*/
   // lienParente?: string;
}

export class Assure implements IAssure {
    constructor(
    public id?: number,
    public immatriculation?: string,
    public nom?: string,
    public prenom?: string,
    public nomJeuneFille?: string,
    public dateNaissance?: Date,
    public dateEmbauche?: Date,
    public lieuNaissance?: string,
    public assurePrincipalId?: number,
    public employeurs?: Employeur[],
    public assurePrincipalImmatriculation?: string,
    public photoId?: number,
    public telephonePAPAB?: string,
    public nomMere?: string,
    public prenomMere?: string,
    public nomPere?: string,
    public prenomPere?: string,
    public preuveLien?: string,
    public nationalite?: string,
    public nomcompletPAPAB?: string,
    public salaire?: number,
    public dateImmatriculation?: Date,
    public codeSystemeExterne?: string,
    public autreTypeAssure?: string,
    public estPrincipal?: boolean,
    public lienParente?: string,
    public principal?: boolean,
    public genre?: string,
    public telephone?: string,
    public email?:string,
    public nip?:string,
    public groupeSanguin?:string,
    public numAssureP?: string,
    public observation?: string, // a creer dans le back
    public situationMatrimoniale?: string, //
    public secteurVillage?: SecteurVillage,
    public secteurVillageId?: number,
    public emploi?: Emploi[],
    //public typeAssure?: TypesAssure,
    public typeAssureId?: number,
    //public profession?: Profession,
    public professionId?: number,
    public numeroAffiliation?: string,
    public immatriculationPrincipal?: string,
    public region?: IRegion,//juste pour detail
    public province?: IProvince,//juste pour detail
    public pieces?: Piece[],
    public photo?: Photo,
    public listeAssure?: IAssure[],
    public partEmployeur?: number,
    public partAssure?: number,
     //  public pieces?: Piece[],
      // public photo?: Photo,
   /* public salaire?: number,
    public genre?: string,
    public dateImmatriculation?: Date,
    public codeSystemeExterne?: string,
    public autreTypeAssure?: string,
    public estPrincipal?: boolean,
    public lienParente?: string*/
    ){}
}
