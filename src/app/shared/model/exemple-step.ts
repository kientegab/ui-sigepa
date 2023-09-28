export interface IExempleStep {
    id?: number;
    nom?: string;
    prenom?: string;
    statut?: string;
    lieuNaissance?: string;
    adresse?: string;
}

export class ExempleStep implements IExempleStep{
    constructor(
        public id?: number,
        public nom?: string,
        public prenom?: string,
        public statut?: string,
        public lieuNaissance?: string,
        public adresse?: string
    ){}
}