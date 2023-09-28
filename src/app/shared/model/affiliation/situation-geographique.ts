import { SecteurVillage } from "../secteurvillage.model";

export interface ISituationGeographique {
    secteurVillage?: SecteurVillage;
    longitude?: string;
    latitude?:string;
    precision?:string;
    avenue?:string;
    rue?:string;
    porte?:string;
    boulevard?:string;
}

export class SituationGeographique implements ISituationGeographique{
    constructor(
        public secteurVillage?: SecteurVillage,
        public longitude?: string,
        public latitude?:string,
        public precision?:string,
        public avenue?:string,
        public rue?:string,
        public porte?:string,
        public boulevard?:string,
    ){}
}
