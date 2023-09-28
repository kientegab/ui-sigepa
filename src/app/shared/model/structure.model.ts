import {TypeStructure} from "./typeStructure.model";

export interface IStructure {
    id?: number;
    code?: number;
    libelle?: string;
    typeStructure?: TypeStructure;
}

export class Structure implements IStructure {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
        typeStructure?: TypeStructure
    ){}
}
export interface GetAllStructureResponse {
    structures: IStructure[];
}
