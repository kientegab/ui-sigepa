import { Assure, IAssure } from "./assure";
import { Caisse, ICaisse } from "./caisse";
import { Declaration, IDeclaration } from "./declaration";
import { IProvince } from "./province.model";
import { ITypesCotisation, TypesCotisation } from "./typesCotisations.model";

export interface ICotisation{
    id?: number;
    dateCotisation?: Date;
    typeCotisation?: ITypesCotisation;
    declarationId?:number;
    montant?: number;
    montantElementSalaire?: number;
    avance?: number;
    cumulAvance?: number;
    credit?: number;
    rappelCotisation?: number;
    modalitePaiementEnum?:string;
    modePaiementEnum?: string;
    dateCheque?: Date;
    referenceCheque?:string;
    montantAmendeAffiliation?: number;
    montantAmendeImmatriculation?: number;
    montantAmendeCotisation?: number;
    caisse?: ICaisse; 
    assure?: IAssure;
     
}

export class Cotisation implements ICotisation{
    constructor(
        public id?: number,
        public dateCotisation?: Date,
        public montant?: number,
        public montantElementSalaire?: number,
        public avance?: number,
        public cumulAvance?: number,
        public credit?: number,
        public rappelCotisation?: number,
        public modalitePaiementEnum?:string,
        public modePaiementEnum?: string,
        public dateCheque?: Date,
        public referenceCheque?:string,
        public montantAmendeAffiliation?: number,
        public montantAmendeImmatriculation?: number,
        public montantAmendeCotisation?: number,
        public caisse?: ICaisse,
        public typeCotisation?: ITypesCotisation,
        public assure?: IAssure,
        public declaration?: IDeclaration
    ){}
}