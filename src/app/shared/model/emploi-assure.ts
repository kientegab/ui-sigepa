export interface IEmploiAssure {
    id?: number;
    dateDebutEmbauche?: Date;
    dateFinEmbauche?: Date;
    raisonSociale?: string;
    nomAssure?: string;
    prenomAssure?: string;
    numAssure?: string;
    motifCessation?: string;

}

export class EmploiAssure implements IEmploiAssure {
    constructor(
        public id?: number,
        public dateDebutEmbauche?: Date,
        public dateFinEmbauche?: Date,
        public raisonSociale?: string,
        public nomAssure?: string,
        public prenomAssure?: string,
        public numAssure?: string,
        public motifCessation?: string
    ){}
}
