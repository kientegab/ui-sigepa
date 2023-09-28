import { Section } from "./section.model";

export class IDivision{
    id?: number;
    code?: string;
    libelle?: string;
    section?: Section;
}

export class Division implements IDivision{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string,
        public section?: Section){}
}
export interface GetAllDivisionResponse {
    divisions: IDivision[];
}