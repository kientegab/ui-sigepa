import { IActivite } from "../activite.model";

export interface IBrancheActiviteStep {
    activite?: IActivite;
}

export class BrancheActiviteStep implements IBrancheActiviteStep{
    constructor(
        public activite?: IActivite,
    ){}
}
