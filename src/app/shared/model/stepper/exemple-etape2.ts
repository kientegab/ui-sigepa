export interface IExempleEtape2 {
    lieuNaissance?: string;
    adresse?: string;
}

export class ExempleEtape2 implements IExempleEtape2{
    constructor(
        public lieuNaissance?: string,
        public adresse?: string
    ){}
}