import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITAssureTCotisation } from '../model/tassure-tcotisation.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';
type EntityResponseType = HttpResponse<ITAssureTCotisation>;
type EntityArrayResponseType = HttpResponse<ITAssureTCotisation[]>;

const resourceUrl = environment.tAssureTCotisationUrl;


@Injectable({
  providedIn: 'root'
})
export class TypeAssureTauxCotisationService {

  constructor(protected http: HttpClient) {}

  create(tAssureTCotisation: ITAssureTCotisation): Observable<EntityResponseType> {
    return this.http.post<ITAssureTCotisation>(resourceUrl, tAssureTCotisation, { observe: 'response' });
  }

  update(tAssureTCotisation: ITAssureTCotisation): Observable<EntityResponseType> {
    return this.http.put<ITAssureTCotisation>(resourceUrl, tAssureTCotisation, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITAssureTCotisation>(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITAssureTCotisation[]>(resourceUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<ITAssureTCotisation[]>(resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ITAssureTCotisation[]>(resourceUrl, { observe: 'response' });
  }
}
