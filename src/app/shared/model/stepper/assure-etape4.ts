export interface IAssureEtape4 {
    nomMere?: string;
    prenomMere?: string;
}

export class AssureEtape4 implements IAssureEtape4{
    constructor(
        public nomMere?: string,
        public prenomMere?: string
    ){}
}
