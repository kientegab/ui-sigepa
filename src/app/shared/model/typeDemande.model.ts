import {Article} from "./article.model";
import {Visa} from "./visa.model";
import {Piece} from "./piece.model";
import {Ampliation} from "./ampliation.model";

export interface ITypeDemande {
    id?: number;
    code?: string;
    libelle?: string;
    plafondAnnee?: number;
    articleDTOs?: Article;
    visaDTOs?: Visa;
    ampliationDTOs?: Ampliation;
    pieceDTOs?: Piece;
}

export class TypeDemande implements ITypeDemande {
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string,
        public plafondAnnee?: number,
        public articleDTOs?: Article,
        public ampliationDTOs?: Ampliation,
        public pieceDTOs?: Piece,
    ){}
}
export interface GetAllTypeDemandeResponse {
    typeDemandes: ITypeDemande[];
}
