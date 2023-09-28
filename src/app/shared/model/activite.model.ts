//A changer pour mettre divion à la place
import { Groupe } from "./groupe.model";

export class IActivite{
    id?: number;
    code?: string;
    libelle?: string;
    estActif?: boolean;
    groupe?: Groupe;
}

export class Activite implements IActivite{
    constructor(
        public id?: number, 
        public code?: string,
        public libelle?: string,
        public estActif?: boolean,
        public groupe?: Groupe
        ){}
}
export interface GetAllActiviteResponse {
    activites: IActivite[];
}