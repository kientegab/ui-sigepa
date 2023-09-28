//A changer pour mettre divion à la place
import { Groupe } from "./groupe.model";

export class IMenuItem{
    id?: number;
    code?: string;
    libelle?: string;
    estActif?: boolean;
    groupe?: Groupe;
}

export class Activite implements IMenuItem{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string,
        public estActif?: boolean,
        public groupe?: Groupe
        ){}
}
export interface GetAllActiviteResponse {
    activites: IMenuItem[];
}