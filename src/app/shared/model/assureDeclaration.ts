import { IAssure } from "./assure";

export interface IAssureDeclaration {

    montantDeclarationGlobal?: number;
    listeAssure?: IAssure[];
}

export class AssureDeclaration implements IAssureDeclaration {
    constructor(
        public montantDeclarationGlobal?: number,
        public listeAssure?: IAssure[],
    ){}
}
