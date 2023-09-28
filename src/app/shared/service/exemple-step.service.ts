import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { IExemple } from '../model/exemple';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { IExempleStep } from '../model/exemple-step';

type EntityResponseType = HttpResponse<IExempleStep>;
type EntityArrayResponseType = HttpResponse<IExempleStep[]>;

const resourceUrl = environment.exemple;

@Injectable({
  providedIn: 'root'
})
export class ExempleStepService {

  constructor(protected http: HttpClient) {}

  create(exemple: IExempleStep): Observable<EntityResponseType> {
    return this.http.post<IExempleStep>(resourceUrl, exemple, { observe: 'response' });
  }

  update(exemple: IExempleStep): Observable<EntityResponseType> {
    return this.http.put<IExempleStep>(resourceUrl, exemple, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IExempleStep>(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IExempleStep[]>(resourceUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IExempleStep[]>(resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IExempleStep[]>(resourceUrl, { observe: 'response' });
  }
}
