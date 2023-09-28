import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { IExemple } from '../model/exemple';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';

type EntityResponseType = HttpResponse<IExemple>;
type EntityArrayResponseType = HttpResponse<IExemple[]>;

const resourceUrl = environment.exemple;

@Injectable({
  providedIn: 'root'
})
export class ExempleService {
  constructor(protected http: HttpClient) {}

  create(exemple: IExemple): Observable<EntityResponseType> {
    return this.http.post<IExemple>(resourceUrl, exemple, { observe: 'response' });
  }

  update(exemple: IExemple): Observable<EntityResponseType> {
    return this.http.put<IExemple>(resourceUrl, exemple, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IExemple>(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IExemple[]>(resourceUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IExemple[]>(resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IExemple[]>(resourceUrl, { observe: 'response' });
  }
}
