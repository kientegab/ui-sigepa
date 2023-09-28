import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';
import { IAssure } from '../model/assure';
import {IValideImmatriculation} from "../model/valider-immatriculation";
import {IAffiliationStep} from "../model/affiliation-step";
import {IAssureStep} from "../model/assure-step";
import { IDeclaration } from '../model/declaration';
import { IAssureDeclaration } from '../model/assureDeclaration';

type EntityResponseType = HttpResponse<IAssure>;
type EntityResponseTypeAssureDeclaration = HttpResponse<IAssureDeclaration>;
type EntityArrayResponseType = HttpResponse<IAssure[]>;


const assureUrl = environment.assureUrl;
const assureByDeclarationUrl = environment.resourceListeAssureByDeclaration

@Injectable({
  providedIn: 'root'
})
export class AssureService {

  constructor(private http:HttpClient) { }
  create(pays: any): Observable<EntityResponseType> {
    return this.http.post<IAssure>(assureUrl, pays, { observe: 'response' });
  }

  update(pays: IAssure): Observable<EntityResponseType> {
    return this.http.put<IAssure>(assureUrl, pays, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAssure>(`${assureUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAssure[]>(assureUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IAssure[]>(assureUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${assureUrl}/${id}`, { observe: 'response' });
  }

  queryValider(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAssure[]>(assureUrl+'/validated', { params: options, observe: 'response' });
  }

  queryRejeter(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAssure[]>(assureUrl+'/rejected', { params: options, observe: 'response' });
  }
 
  queryAttente(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAssure[]>(assureUrl+'/novalidated', { params: options, observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IAssure[]>(assureUrl, { observe: 'response' });
  }
//a revoir
    validerImmatriculation(valideImmData: IValideImmatriculation[]):Observable<EntityResponseType> {
      return this.http.post<IAssure>(assureUrl+'/validation-rejet', valideImmData, { observe: 'response' });
    }



    printCarteAssure(id: number): Observable<Blob> {
        return this.http.get(`${assureUrl}/print/${id}`, { responseType: 'blob' });
    }

    
    getListeAssureByTypeAssure(id: any): Observable<EntityArrayResponseType> {
      return this.http.get<IAssure[]>(`${assureUrl}/assures-type/${id}`, { observe: 'response' });
    }


    getListeAssureByDeclaration(id: number): Observable<EntityResponseTypeAssureDeclaration> {

      return this.http.get<IAssureDeclaration>(`${assureByDeclarationUrl}/declaration/${id}`, { observe: 'response' });
    }
    findAssByImmatriculation(numAss: string | undefined):Observable<HttpResponse<IAssure>> {
        return this.http.get<IAssure>(`${assureUrl}/matricule/${numAss}`, { observe: 'response' });
    }


    getAssureByImmatriculation(immatriculation: string):Observable<HttpResponse<IAssure>> {
      return this.http.get<IAssure>(`${assureUrl}/matricule/${immatriculation}`, { observe: 'response' });
  }

}
