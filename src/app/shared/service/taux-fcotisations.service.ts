import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { ITauxFCotisation } from '../model/taux-fcotisation';

type EntityResponseType = HttpResponse<ITauxFCotisation>;
type EntityArrayResponseType = HttpResponse<ITauxFCotisation[]>;

const resourceUrl = environment.tauxCotisationUrl;
const resourceTauxUrl = environment.tauxByTypeEmployeurUrl;
const resourceTauxAssure = environment.tauxByTypeAssureUrl;


@Injectable({
  providedIn: 'root'
})
export class TauxFCotisationsService {
  constructor(protected http: HttpClient) {}

  create(tauxCotisation: ITauxFCotisation): Observable<EntityResponseType> {
    return this.http.post<ITauxFCotisation>(resourceUrl, tauxCotisation, { observe: 'response' });
  }

  update(tauxCotisation: ITauxFCotisation): Observable<EntityResponseType> {
    return this.http.put<ITauxFCotisation>(resourceUrl, tauxCotisation, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITauxFCotisation>(`${resourceUrl}/${id}`, { observe: 'response' });
  }


  getTauxByTypeEmployeur(id: number): Observable<EntityResponseType> {
    return this.http.get<ITauxFCotisation>(`${resourceTauxUrl}/taux-type/${id}`, { observe: 'response' });
  }

  getTauxAssureByType(id: number): Observable<EntityResponseType> {
    return this.http.get<ITauxFCotisation>(`${resourceTauxAssure}/taux-type/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITauxFCotisation[]>(resourceUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<ITauxFCotisation[]>(resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ITauxFCotisation[]>(resourceUrl+'/liste/actif', { observe: 'response' });
  }
}
