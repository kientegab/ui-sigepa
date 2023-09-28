
export class ICircuit{
    id?: number;
    libelle?: string;
    statut?: boolean;
    parent?: ICircuit
}

export class Circuit implements ICircuit{
    constructor(
        public id?: number, 
        public libelle?: string,
        public statut?: boolean,
        public parent?: ICircuit
        
        ){}
}
export interface GetAllCircuitResponse {
    circuits: ICircuit[];
}