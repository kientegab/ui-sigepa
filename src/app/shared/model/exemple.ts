export interface IExemple {
    id?: number;
    code?: number;
    libelle?: string;
}

export class Exemple implements IExemple {
    constructor(
        public id?: number,
        public code?: number,
        public libelle?: string
    ){}
}
