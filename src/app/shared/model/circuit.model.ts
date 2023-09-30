
export class ICircuit{
    id?: number;
    libelle ?: string;
    statu ?: boolean;
    delais ?: string;
    parent ?: ICircuit
}

export class Circuit implements ICircuit{
    constructor(
        public id?: number, 
        public libelle ?: string,
        public statu ?: boolean,
        public delais ?: string,
        public parent ?: ICircuit
        
        ){}
}
export interface GetAllCircuitResponse {
    circuits: ICircuit[];
}