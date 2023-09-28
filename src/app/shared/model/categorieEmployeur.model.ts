import { Province } from "./province.model";

export class CategorieEmployeur{
    id?: number;
    code?: string;
    libelle?: string;
}

export interface GetAllCategorieEmployeurResponse {
    categorieEmployeurs: CategorieEmployeur[];
}