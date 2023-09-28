
export interface ITypeDemande {
    id?: number;
    code?: number;
    libelle?: string;
}

export class TypeDemande implements ITypeDemande {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
    ){}
}
export interface GetAllTypeDemandeResponse {
    typeDemandes: ITypeDemande[];
}
