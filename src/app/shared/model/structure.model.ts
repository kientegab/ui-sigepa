import {TypeStructure} from "./typeStructure.model";

export interface IStructure {
    id?: number;
    code?: number;
    libelle?: string;
    typeStructure?: TypeStructure;
    structureParent?: Structure
}

export class Structure implements IStructure {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
        typeStructure?: TypeStructure,
        structureParent?: Structure

    ){}
}
export interface GetAllStructureResponse {
    structures: IStructure[];
}
