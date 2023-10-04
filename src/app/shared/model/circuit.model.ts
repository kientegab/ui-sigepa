
export class ICircuit{
    id?: number;
    libelle ?: string;
    statut ?: boolean;
    delais ?: string;
    suivants ?: ICircuit;
    precedents ?: ICircuit  

}

export class Circuit implements ICircuit{
    constructor(
        public id?: number, 
        public libelle ?: string,
        public statut ?: boolean,
        public delais ?: string,
        public suivants ?: ICircuit,
        public precedents ?: ICircuit
        ){}
}
export interface GetAllCircuitResponse {
    circuits: ICircuit[];
}