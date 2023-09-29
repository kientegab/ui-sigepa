import { ITypeDemande } from "./typeDemande.model";

export interface IDemande {
    id?: number;
    dateEffet?: Date;
    typeDemandeur?: string;
    typeDemande?: ITypeDemande;
    numero?: string;
    dateDemande?: Date;
    StructDestination?: String;
    Status?: String;
}

export class Demande implements IDemande {
    constructor(
        public id?: number,
        public dateEffet?: Date,
        public typeDemandeur?: string,
        public typeDemande?: ITypeDemande,
        public numero?: string,
        public dateDemande?: Date,
        public StructDestination?: String,
        public Status?: String
    ){}
}
// export interface GetAllTypeDemandeResponse {
//     typeDemandes: ITypeDemande[];
// }
