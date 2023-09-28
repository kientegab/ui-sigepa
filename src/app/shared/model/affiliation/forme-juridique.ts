
import { IFormeJuridique } from "../formesJuridiques.model";
import { TypeEmployeur } from '../typeEmployeur.model';

export interface IFormeJuridiqueStep {
    typeEmployeur?:TypeEmployeur
    formesJuridique?: IFormeJuridique;
};


export class FormesJuridiqueStep implements IFormeJuridiqueStep{
    constructor(
        public formeJuridique?: IFormeJuridique,
        public typeEmployeur?:TypeEmployeur
    ){}



}
