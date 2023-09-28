import {TypeStructure} from "./typeStructure.model";
import {Ministere} from "./ministere.model";

export interface IStructure {
    id?: number;
    code?: number;
    libelle?: string;
    typeStructure?: TypeStructure;
    structureParent?: Structure;
    ministere?: Ministere
}

export class Structure implements IStructure {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
        typeStructure?: TypeStructure,
        structureParent?: Structure,
        ministere?: Ministere,

    ){}
}
export interface GetAllStructureResponse {
    structures: IStructure[];
}
