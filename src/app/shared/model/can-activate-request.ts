import { IMinistere } from "./ministere.model";
import { IStructure } from "./structure.model";

export interface ICanActivateRequest {
    nom?: string;
	prenom?: string;
	noMatricule?: string;
	dateNaissance?: Date;
	dateRecrutement?: Date;
    ministere?: IMinistere;
    structure?: IStructure;
    typeAgent?: string;
}
export class CanActivateRequest implements ICanActivateRequest{
    constructor(
    public nom?: string,
    public prenom?: string,
    public noMatricule?: string,
    public dateNaissance?: Date,
    public dateRecrutement?: Date,
    public ministere?: IMinistere,
    public structure?: IStructure,
    public typeAgent?: string
    ){}

}
export interface ICreateAccountRequest {
    email?: string;
    noMatricule?: string;
    password?: string;
  }

export class CreateAccountRequest implements ICreateAccountRequest{
constructor(
    public email?: string,
    public noMatricule?: string,
    public password?: string
){}
}