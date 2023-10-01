import {Article} from "./article.model";
import {Visa} from "./visa.model";
import {Piece} from "./piece.model";
import {Ampliation} from "./ampliation.model";
import {Motif} from "./motif.model";

export interface ITypeDemande {
    id?: number;
    code?: string;
    libelle?: string;
    plafondAnnee?: number;
    articleDTOs?: Article[];
    visaDTOs?: Visa[];
    ampliationDTOs?: Ampliation[];
}

export class TypeDemande implements ITypeDemande {
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string,
        public plafondAnnee?: number,
        public articleDTOs?: Article[],
        public visaDTOs?: Visa[],
        public ampliationDTOs?: Ampliation[],
    ){}
}
export interface GetAllTypeDemandeResponse {
    typeDemandes: ITypeDemande[];
}
