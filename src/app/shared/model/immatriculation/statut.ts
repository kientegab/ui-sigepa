import { Emploi, IEmploi } from "../emploi.model";
import { IProfession, Profession } from "../profession.model";
import { ITypesAssure, TypesAssure } from "../typesAssures.model";

export interface IStatut {
    emploi?: IEmploi[];
    typeAssure?: ITypesAssure;
    profession?: IProfession;


}

export class Statut implements IStatut{
    constructor(
        public emploi?: IEmploi[],
        public typeAssure?: ITypesAssure,
        public profession?: IProfession

    ){}
}
