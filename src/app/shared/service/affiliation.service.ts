import { Injectable } from '@angular/core';
import { AffiliationStep, IAffiliationStep } from '../model/affiliation-step';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { createRequestOption } from '../util/request-util';
import { IValideAffiliation } from '../model/vaider-affiliation';
import {Employeur} from "../model/employeur";

type EntityResponseType = HttpResponse<IAffiliationStep>;
type EntityArrayResponseType = HttpResponse<IAffiliationStep[]>;
type EntityValidatedType = HttpResponse<IAffiliationStep[]>;

const resourceUrl = environment.affiliation;
const ressourceValide= environment.affiliationValider;

@Injectable({
  providedIn: 'root'
})
export class AffiliationService {

    constructor(protected http: HttpClient) {}

    create(affiliation: any): Observable<EntityResponseType> {
      return this.http.post<IAffiliationStep>(resourceUrl, affiliation, { observe: 'response' });
    }

    update(affiliation: any): Observable<EntityResponseType> {
      return this.http.put<IAffiliationStep>(resourceUrl, affiliation, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
      return this.http.get<IAffiliationStep>(`${resourceUrl}/${id}`, { observe: 'response' });
    }

    printAffiliation(id: number): Observable<Blob> {
      return this.http.get(`${resourceUrl}/notification-affiliation/${id}`, { responseType: 'blob' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<IAffiliationStep[]>(resourceUrl, { params: options, observe: 'response' });
    }

     findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
      return this.http.get<IAffiliationStep[]>(resourceUrl, { observe: 'response' });
    }

    validerAffiliation(valide: IValideAffiliation): Observable<EntityResponseType> {
      return this.http.post<IAffiliationStep>(resourceUrl+'/valider', valide, { observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
      return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
    }

    findListe(): Observable<EntityArrayResponseType> {
      return this.http.get<IAffiliationStep[]>(resourceUrl, { observe: 'response' });
    }

    findListeEmployeurValider(event?: LazyLoadEvent): Observable<EntityArrayResponseType>{
      return this.http.get<IAffiliationStep[]>(resourceUrl+'/validated', {observe: 'response'});
    }

    findListeEmployeurNonValider(event?: LazyLoadEvent): Observable<EntityArrayResponseType>{
      return this.http.get<IAffiliationStep[]>(resourceUrl+'/novalidated', {observe: 'response'});
    }

    findListeEmployeurRejeter(event?: LazyLoadEvent): Observable<EntityArrayResponseType>{
      return this.http.get<IAffiliationStep[]>(resourceUrl+'/rejected', {observe: 'response'});
    }

    findEmployeurByNumAff(numeroAffiliation: string):Observable<HttpResponse<IAffiliationStep>> {
      //     return this.http.get<IAffiliationStep>("assets/data/emplois.json", { observe: 'response' });

        return this.http.get<IAffiliationStep>(`${resourceUrl}/nunumeroAffiliation/${numeroAffiliation}`, { observe: 'response' });

    }
    queryValider(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<IAffiliationStep[]>(resourceUrl+'/validated', { params: options, observe: 'response' });
    }
  
    queryRejeter(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<IAffiliationStep[]>(resourceUrl+'/rejected', { params: options, observe: 'response' });
    }
   
    queryAttente(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<IAffiliationStep[]>(resourceUrl+'/novalidated', { params: options, observe: 'response' });
    }
  
}
