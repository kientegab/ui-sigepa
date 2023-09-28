export interface IProfession{
    id?: number;
    code?: string;
    libelle?: string;
}

export class Profession implements IProfession{
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string){}
}

