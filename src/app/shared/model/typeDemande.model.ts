
export interface ITypeDemande {
    id?: number;
    code?: number;
    libelle?: string;
    plafondAnnee?: number;
}

export class TypeDemande implements ITypeDemande {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
        public plafondAnnee?: number,
    ){}
}
export interface GetAllTypeDemandeResponse {
    typeDemandes: ITypeDemande[];
}
