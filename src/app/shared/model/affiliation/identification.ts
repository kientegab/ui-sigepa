import { Piece } from "../piece";
import { ITypesPiece } from "../typesPieces.model";

export interface IIdentification {
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
    morale?:boolean;
    numeroCompteBancaire?:string;
    referenceNotification?:string;
    nip?:string;
    statut?:string;
    nombreFemme?:number;
    nombreHomme?:number;
    nombreTotalverif?:number;
    dateAffiliation?:Date;
    pieces?:Piece[];


}

export class Identification implements IIdentification{
    constructor(
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
        public numeroCompteBancaire?:string,
        public referenceNotification?:string,
        public nip?:string,
        public brancheActivite?:string,
        public domaineActivite?:string,
        public activitePrincipale?:string,
        public nombreFemme?:number,
        public nombreHomme?:number,
        public dateAffiliation?:Date,
        public pieces?:Piece[],

    ){}
}
