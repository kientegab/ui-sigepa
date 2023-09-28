
import { IActivite } from "./activite.model";
import { IAssure } from "./assure";
import { IFormeJuridique } from "./formesJuridiques.model";
import { Piece } from "./piece";
import { SecteurVillage } from "./secteurvillage.model";
import { TypeEmployeur } from "./typeEmployeur.model";
import { TypesPiece } from "./typesPieces.model";

export interface IAffiliationStep {
    id?: number;
    numeroAffiliation?: string;
    raisonSociale?: string;
    sigle?: string;
    rccm?: string;
    ifu?: string;
    dateCreationEntreprise?: Date;
    dateEmbauchePremierEmploye?: Date;
    nom?: string;
    prenom?: string;
    telephone?: string;
    email?: string;
    boitePostale?: string;
    // estMorale?:boolean;
    morale?:boolean;
    secteurVillage?: SecteurVillage;
    longitude?: string;
    latitude?:string;
    precision?:string;
    numeroCompteBancaire?:string;
    referenceNotification?:string;
    formeJuridique?: IFormeJuridique;
    typeEmployeur?:TypeEmployeur;
    assure?: IAssure[];
    nip?:string;
    statut?:string;
    activite?: IActivite;
    nombreFemme?:number;
    nombreHomme?:number;
    avenue?:string;
    rue?:string;
    porte?:string;
    boulevard?:string;
    motif_rejet?:string;
    estFormel?:boolean;
    valide?:boolean;
    dateValide?:Date;
    dateAffiliation?:Date;
    pieces?: Piece[],

}

export class AffiliationStep implements IAffiliationStep{
    constructor(
        public id?: number,
        public numeroAffiliation?: string,
        public raisonSociale?: string,
        public sigle?: string,
        public rccm?: string,
        public ifu?: string,
        public dateCreationEntreprise?: Date,
        public dateEmbauchePremierEmploye?: Date,
        public nom?: string,
        public prenom?: string,
        public telephone?: string,
        public email?: string,
        public boitePostale?: string,
        public morale?:boolean,
        public secteurVillage?: SecteurVillage,
        public longitude?: string,
        public latitude?:string,
        public precision?:string,
        public numeroCompteBancaire?:string,
        public referenceNotification?:string,
        public formesJuridique?: IFormeJuridique ,
        public typeEmployeur?:TypeEmployeur,
        public  assure?: IAssure[],
        public nip?:string,
        public statut?:string,
        public activite?: IActivite,
        public nombreFemme?:number,
        public nombreHomme?:number,
        public avenue?:string,
        public rue?:string,
        public porte?:string,
        public boulevard?:string,
        public estFormel?:boolean,
        public valide?:boolean,
        public dateValide?:Date,
        public dateAffiliation?:Date,
        public pieces?: Piece[],
        public type_piece_id?: TypesPiece,
        public referencepiece?: string,
        

    ){}
}
