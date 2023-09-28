import {TypesPiece} from "./typesPieces.model";

export interface IPiece{
    id?: number;
    reference?: string;
    dateDelivrance?: Date;
    dateExpiration?: Date;
    autoriteDelivrance?: string;
    typePiece?: TypesPiece;
    file?: File;

   // chemin?:string
}
export class Piece implements IPiece {
    constructor(
       public id?: number,
       public reference?: string,
       public dateDelivrance?:Date,
       public dateExpiration?: Date,
       public autoriteDelivrance?: string,
       public file?: File,
       //public chemin?:string,
       public typePiece?:TypesPiece)

       {}
}
