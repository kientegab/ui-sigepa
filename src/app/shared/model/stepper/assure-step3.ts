import { Emploi } from "../emploi.model";
import { Profession } from "../profession.model";
import { TypesAssure } from "../typesAssures.model";

export interface IAssureEtape3 {
    //nomPere?: string;
    //prenomPere?: string;
   // statut?: string;
   // autreAPreciser?: string;
    emploi?: Emploi[];
    typeAssure?: TypesAssure;
    classification?: string;
    profession?: Profession;


}

export class AssureEtape3 implements IAssureEtape3{
    constructor(
        public nomPere?: string,
        public prenomPere?: string,
        public statut?: string,
        public emploi?: Emploi[]
    ){}
}
