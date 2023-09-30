
export interface ITypeDemande {
    id?: number;
    code?: string;
    libelle?: string;
    plafondAnnee?: number;
}

export class TypeDemande implements ITypeDemande {
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string,
        public plafondAnnee?: number,
    ){}
}
export interface GetAllTypeDemandeResponse {
    typeDemandes: ITypeDemande[];
}
