import { Arrondissement, IArrondissement } from "../arrondissement.model";
import { IRegion, Region } from "../region.model";
import {ISecteurVillage, SecteurVillage} from "../secteurvillage.model";
import {IProvince, Province} from "../province.model";
import {Commune, ICommune} from "../commune.model";

export interface ISituationGeographique {
    region?: IRegion;
    arrondissement?: IArrondissement;
    secteurVillage?: ISecteurVillage;
    province?: IProvince;
    commune?: ICommune;

}

export class SituationGeographique implements ISituationGeographique{
    constructor(
        public region?: IRegion,
        public arrondissement?: IArrondissement,
        public secteurVillage?: ISecteurVillage,
        public province?: IProvince,
        public commune?: ICommune,
    ){}
}
