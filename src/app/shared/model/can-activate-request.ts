import { IAgent } from "./agent.model";
import { IMinistere } from "./ministere.model";
import { IProfil } from "./profil";
import { IStructure } from "./structure.model";
import { IUser } from "./user";

export interface ICanActivateRequest {
    nom?: string;
	prenom?: string;
    telephone?:String;
    username?:String;
	matricule?: string;
    email?: string;
    usernames?: string;
    password?: string;
    
 
	dateNaissance?: Date;
	dateRecrutement?: Date;
    ministere?: IMinistere;
    structure?: IStructure;
    typeAgent?: string;
    profil?: IProfil;
    // ministeres?: IMinistere[];
    // structures?: IStructure[];
    superieur?: ICanActivateRequest
}
export class CanActivateRequest implements ICanActivateRequest{
    constructor(
    public nom?: string,
    public prenom?: string,
    public telephone?:String,
    public username?:String,
    public matricule?: string,
    public dateNaissance?: Date,
    public dateRecrutement?: Date,
    public ministere?: IMinistere,
    public structure?: IStructure,
    public typeAgent?: string,
    public profil?: IProfil,
    public email?: string,
    public usernames?: string,
    public password?: string,
    // public ministeres?: IMinistere[],
    // public structures?: IStructure[],
    public superieur?: ICanActivateRequest
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