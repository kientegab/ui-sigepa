import {TypeStructure} from "./typeStructure.model";

export interface IStructure {
    id?: number;
    code?: number;
    libelle?: string;
    type?: TypeStructure;
    parent?: Structure;
}

export class Structure implements IStructure {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string,
        public type?: TypeStructure,
        public parent?: Structure,
    ){}
}
export interface GetAllStructureResponse {
    structures: IStructure[];
}
