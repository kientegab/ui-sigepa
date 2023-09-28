import {Photo} from "../photo.model";

export interface IInfoComplementaire {
    numeroAffiliation?: string;
    codeSystemeExterne?: string;
    photo?: File;
}

export class InfoComplementaire implements IInfoComplementaire{
    constructor(
        public numeroAffiliation?: string,
        public codeSystemeExterne?: string,
        public     photo?: File

    ){}
}
