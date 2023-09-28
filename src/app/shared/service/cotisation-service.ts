import { Injectable } from '@angular/core';
import {  ICotisation } from '../model/cotisation.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<ICotisation>;
type EntityArrayResponseType = HttpResponse<ICotisation[]>;

const cotisationUrl = environment.cotisationUrl;

@Injectable({
  providedIn: 'root'
})
export class CotisationService {

  constructor(private http:HttpClient) { }
  create(cotisations: ICotisation): Observable<EntityResponseType> {
    return this.http.post<ICotisation>(cotisationUrl, cotisations, { observe: 'response' });
  }

  update(cotisations: ICotisation): Observable<EntityResponseType> {
    return this.http.put<ICotisation>(cotisationUrl, cotisations, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICotisation>(`${cotisationUrl}/${id}`, { observe: 'response' });
  }

  findCumulAvance(idDeclaration: any): Observable<EntityResponseType> {
    return this.http.get<ICotisation>(`${cotisationUrl}/cumul/${idDeclaration}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICotisation[]>(cotisationUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<ICotisation[]>(cotisationUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${cotisationUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ICotisation[]>(cotisationUrl, { observe: 'response' });
  }
}