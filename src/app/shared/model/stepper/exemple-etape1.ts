export interface IExempleEtape1 {
    nom?: string;
    prenom?: string;
}

export class ExempleEtape1 implements IExempleEtape1{
    constructor(
        public nom?: string,
        public prenom?: string
    ){}
}
