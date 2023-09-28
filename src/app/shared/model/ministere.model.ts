export interface IMinistere{
    id?: number;
    code?: string;
    libelle?: string;
    sigle?: string;
}
export class Ministere implements IMinistere {
    constructor(
        public id?: number,
        public code?: string,
        public libelle?: string,
        public sigle?: string){}
}



