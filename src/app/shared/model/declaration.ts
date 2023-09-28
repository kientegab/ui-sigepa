import { AffiliationStep } from "./affiliation-step";
import { IAssure } from "./assure";
import { IAssureAssiete } from "./assure-assiete";

import { Employeur } from "./employeur";

export class IDeclaration{
    id?: number;
    dateDeclaration?: Date;
    dateDebutPeriode?:Date;
    dateFinPeriode?: Date;
    employeur?: AffiliationStep;
    montant?: number;
    observation?: string;
    assure: IAssure[] = [];
    tauxAssure?: number;
    tauxEmployeur?: number;
    typeDeclarant?: string;
    code?: string
}

export class Declaration implements IDeclaration{
    constructor(
        public  id?: number,
        public dateDeclaration?: Date,
        public dateDebutPeriode?:Date,
        public dateFinPeriode?: Date,
        public employeur?: AffiliationStep,
        public montant?: number,
        public observation?: string,
        public assure:IAssure[] = [],
        public tauxAssure?: number,
        public tauxEmployeur?: number,
        public typeDeclarant?: string,
        public dtDeclaration?: Date
    ){}
}