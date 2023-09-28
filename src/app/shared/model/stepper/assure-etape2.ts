import { Arrondissement } from "../arrondissement.model";
import { Region } from "../region.model";

export interface IAssureEtape2 {
    nom?: string;
    prenom?: string;
    region?: Region;
    arrondissement?: Arrondissement;

}

export class AssureEtape2 implements IAssureEtape2{
    constructor(
        public nom?: string,
        public prenom?: string
    ){}
}
