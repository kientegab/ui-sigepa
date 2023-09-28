export interface ICaisse {
    id?: number;
    nom?: string;
    numero?: string;
    localite?: string;
}

export class Caisse implements ICaisse{
    constructor(
        public id?: number,
        public nom?: string,
        public numero?: string,
        public localite?: string
    ) {}
}