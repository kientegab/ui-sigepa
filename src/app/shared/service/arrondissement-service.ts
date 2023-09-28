import { Injectable } from '@angular/core';
import { IArrondissement } from '../model/arrondissement.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<IArrondissement>;
type EntityArrayResponseType = HttpResponse<IArrondissement[]>;


const arrondissementUrl = environment.arrondissementUrl;

@Injectable({
  providedIn: 'root'
})
export class ArrondissementService {

  constructor(private http:HttpClient) { }

  create(exemple: IArrondissement): Observable<EntityResponseType> {
    return this.http.post<IArrondissement>(arrondissementUrl, exemple, { observe: 'response' });
  }

  update(exemple: IArrondissement): Observable<EntityResponseType> {
    return this.http.put<IArrondissement>(arrondissementUrl, exemple, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IArrondissement>(`${arrondissementUrl}/${id}`, { observe: 'response' });
  }

  findArrondByIdCommune(id: number): Observable<EntityArrayResponseType> {
    return this.http.get<IArrondissement[]>(`${arrondissementUrl}/liste/${id}`, { observe: 'response' });
  }
  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IArrondissement[]>(arrondissementUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    //return this.http.get<IArrondissement[]>("assets/data/arrondissements.json", { observe: 'response' });
     return this.http.get<IArrondissement[]>(arrondissementUrl+'/liste', { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${arrondissementUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IArrondissement[]>(arrondissementUrl+'/liste', { observe: 'response' });
  }

}