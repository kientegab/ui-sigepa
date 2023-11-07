import { IMinistere } from "./ministere.model";
import { IProfil } from "./profil-old";
import { IStructure } from "./structure.model";

export interface ICanActivateRequest {
    nom?: string;
	prenom?: string;
    telephone?:String;
    username?:String;
	noMatricule?: string;
 
	dateNaissance?: Date;
	dateRecrutement?: Date;
    ministere?: IMinistere;
    structure?: IStructure;
    typeAgent?: string;
    profil?: IProfil
}
export class CanActivateRequest implements ICanActivateRequest{
    constructor(
    public nom?: string,
    public prenom?: string,
    public telephone?:String,
    public username?:String,
    public noMatricule?: string,
    public dateNaissance?: Date,
    public dateRecrutement?: Date,
    public ministere?: IMinistere,
    public structure?: IStructure,
    public typeAgent?: string,
    public profil?: IProfil
    ){}

}
export interface ICreateAccountRequest {
    email?: string;
   // noMatricule?: string;
    username?:String;
    password?: string;
  }

export class CreateAccountRequest implements ICreateAccountRequest{
constructor(
    public email?: string,
    public username?:String,
   // public noMatricule?: string,
    public password?: string
){}
}