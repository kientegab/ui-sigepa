import { Injectable } from "@angular/core"; 
import { IAffiliationStep } from '../model/affiliation-step';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { createRequestOption } from '../util/request-util';
import { IValideAffiliation } from '../model/vaider-affiliation'; 
import { IAssure } from "../model/assure";
import { ICarte } from "../model/carte.model";
import { IDeclaration } from "../model/declaration";
import { ICotisation } from "../model/cotisation.model";

type EntityResponseType = HttpResponse<IAffiliationStep>;
type EntityArrayResponseType = HttpResponse<IAffiliationStep[]>;

const resourceUrl = environment.reportingUrl;

@Injectable({
    providedIn: 'root'
  })
export class ReportService {

    constructor(protected http: HttpClient) {}

    create(affiliation: any): Observable<EntityResponseType> {
      return this.http.post<IAffiliationStep>(resourceUrl, affiliation, { observe: 'response' });
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

    checkAffiliation(data: string):Observable<HttpResponse<IAffiliationStep[]>> {  
        return this.http.post<IAffiliationStep[]>(`${resourceUrl}/check-affiliation/`, data, { observe: 'response' });
    }

    checkImmatriculation(data: string):Observable<HttpResponse<IAssure[]>> {  
        return this.http.post<IAssure[]>(`${resourceUrl}/check-immatriculation/`, data, { observe: 'response' });
    }

    checkCarte(data: string):Observable<HttpResponse<ICarte[]>> {  
        return this.http.post<ICarte[]>(`${resourceUrl}/check-carte/`, data, { observe: 'response' });
    }

    checkDeclaration(data: string):Observable<HttpResponse<IDeclaration[]>> {  
        return this.http.post<IDeclaration[]>(`${resourceUrl}/check-declaration/`, data, { observe: 'response' });
    }

    checkCotisation(data: string):Observable<HttpResponse<ICotisation[]>> {  
        return this.http.post<ICotisation[]>(`${resourceUrl}/check-cotisation/`, data, { observe: 'response' });
    }

    exportAffiliation(data: any, format: string): Observable<Blob> { 
        return this.http.post(`${resourceUrl}/export-affiliation/${format}`, data, { responseType: 'blob' });
    }

    exportImmatriculation(data: any, format: string): Observable<Blob> { 
        return this.http.post(`${resourceUrl}/export-immatriculation/${format}`, data, { responseType: 'blob' });
    }

    exportCarte(data: any, format: string): Observable<Blob> { 
        return this.http.post(`${resourceUrl}/export-carte/${format}`, data, { responseType: 'blob' });
    }

    exportDeclaration(data: any, format: string): Observable<Blob> { 
        return this.http.post(`${resourceUrl}/export-declaration/${format}`, data, { responseType: 'blob' });
    }

    exportCotisation(data: any, format: string): Observable<Blob> { 
        return this.http.post(`${resourceUrl}/export-cotisation/${format}`, data, { responseType: 'blob' });
    }
}