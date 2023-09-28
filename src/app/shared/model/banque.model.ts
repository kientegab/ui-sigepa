export interface IBanque {
    id?: number;
    nom?: string;
    code?: string;
    guichet?: string;
    numero?:string;
    cle?: string;
}

export class Banque implements IBanque{
    constructor(
        public id?: number,
        public nom_banque?: string,
        public code_banque?: string,
        public code_guichet?: string,
        public cle_rib?: string
    ) {}
}
