import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IEmployeur } from '../model/employeur';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAffiliationStep } from '../model/affiliation-step';
type EntityResponseType = HttpResponse<IEmployeur>;
type EntityArrayResponseType = HttpResponse<IEmployeur[]>;
const resourceUrl = environment.employeur;


@Injectable({
  providedIn: 'root'
})
export class EmployeurService {

  constructor(private http: HttpClient) { }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    
    return this.http.get<IEmployeur[]>(`${resourceUrl}`, { observe: 'response' });
  }

  getEmployeurByTypeEmployeur(id: number): Observable<EntityArrayResponseType> {
    return this.http.get<IEmployeur[]>(`${resourceUrl}/employes-type/${id}`, { observe: 'response' });}
  
    findByType(idType: any): Observable<EntityArrayResponseType> {
    return this.http.get<IEmployeur[]>( `${resourceUrl+'/type-employeur'}/${idType}`,  { observe: 'response' });
  }

  // request param
  getEmployeurInfo(numAffiliation: any): Observable<EntityArrayResponseType>{
    return this.http.get<IAffiliationStep[]>( `${resourceUrl+'/numeroAffiliation?numeroAffiliation='}${numAffiliation}`,  { observe: 'response' });
  }

    getEmployeurByNuAff(numAffiliation: any): Observable<HttpResponse<IAffiliationStep>>{
        return this.http.get<IAffiliationStep>( `${resourceUrl+'/numero-affiliation'}/${numAffiliation}`,  { observe: 'response' });
    }

    
}
