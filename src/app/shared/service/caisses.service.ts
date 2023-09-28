import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { ICaisse } from '../model/caisse';

type EntityResponseType = HttpResponse<ICaisse>;
type EntityArrayResponseType = HttpResponse<ICaisse[]>;

const resourceUrl = environment.caisseUrl;

@Injectable({
  providedIn: 'root'
})
export class CaissesService {
  constructor(protected http: HttpClient) {}

  create(caisse: ICaisse): Observable<EntityResponseType> {
    return this.http.post<ICaisse>(resourceUrl, caisse, { observe: 'response' });
  }

  update(caisse: ICaisse): Observable<EntityResponseType> {
    return this.http.put<ICaisse>(resourceUrl, caisse, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICaisse>(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICaisse[]>(resourceUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<ICaisse[]>(resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ICaisse[]>(resourceUrl, { observe: 'response' });
  }
}
