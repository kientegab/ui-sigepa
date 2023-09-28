import { TypesAssure } from "../typesAssures.model";
import {SituationMatrimoniale} from "../situationMatrimoniale.model";
import {TypesPiece} from "../typesPieces.model";
import {Piece} from "../piece";

export interface IIDentification {

    nom?: string;
    prenom?: string;
    nomJeuneFille?: string;
    dateNaissance?: Date;
    lieuNaissance?: string;
    nomMere?: string;
    prenomMere?: string;
    nomPere?: string;
    prenomPere?: string;
    preuveLien?: string;
    nationalite?: string;
    principal?: boolean;
    genre?: string;
    telephone?: string;
    email?:string;
    telephonePAPAB?: string;
    nomcompletPAPAB?: string;
    nip?:string;
    dateEmbauche?:Date;
    groupeSanguin?:string;
    assurePrincipalImmatriculation?: string; // a creer dans le back
    lienParente?: string;
    observation?: string; // a creer dans le back
    situationMatrimoniale?: string;
    statut?:string;
    pieces?:Piece[] ;
    files?: File [];
}

export class Identification implements IIDentification{
    constructor(
    public   nom?: string,
    public prenom?: string,
    public nomJeuneFille?: string,
    public dateNaissance?: Date,
    public lieuNaissance?: string,
    public nomMere?: string,
    public prenomMere?: string,
    public nomPere?: string,
    public prenomPere?: string,
    public preuveLien?: string,
    public nationalite?: string,
    public principal?: boolean,
    public genre?: string,
    public telephone?: string,
    public email?:string,
    public nip?:string,
    public telephonePAPAB?:string,
    public nomcompletPAPAB?:string,
    public dateEmbauche?:Date,
    public groupeSanguin?:string,
    public numAssureP?: string, // a creer dans le back
    public lienParente?: string,
    public observation?: string, // a creer dans le back
    public situationMatrimoniale?: string,
    public statut?:string,
    public files?: File [],
    public pieces?:Piece[]

    ){
    }
}
