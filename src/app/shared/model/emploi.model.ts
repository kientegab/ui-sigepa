import { SecteurActivite } from './secteurActivite.model';
export interface IEmploi{
    id?: number;
    code?: string;
    libelle?: string;
   
}

export class Emploi implements IEmploi{
    constructor(
        public id?: number, 
        public code?: string, 
        public libelle?: string
       ){}
}


