import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { IBanque } from '../model/banque.model';


type EntityResponseType = HttpResponse<IBanque>;
type EntityArrayResponseType = HttpResponse<IBanque[]>;

const resourceUrl = environment.banqueUrl;

@Injectable({
  providedIn: 'root'
})


export class BanqueService {
  constructor(protected http: HttpClient) {}

  create(banque: IBanque): Observable<EntityResponseType> {
    return this.http.post<IBanque>(resourceUrl, banque, { observe: 'response' });
  }

  update(banque: IBanque): Observable<EntityResponseType> {
    return this.http.put<IBanque>(resourceUrl, banque, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IBanque>(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IBanque[]>(resourceUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IBanque[]>(resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IBanque[]>(resourceUrl, { observe: 'response' });
  }
}