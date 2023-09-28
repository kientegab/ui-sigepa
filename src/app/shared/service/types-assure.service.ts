import { Injectable } from '@angular/core';
//import { TypesAssure } from '../model/types-assure.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITypesAssure } from '../model/typesAssures.model';
import { createRequestOption } from '../util/request-util';
type EntityResponseType = HttpResponse<ITypesAssure>;
type EntityArrayResponseType = HttpResponse<ITypesAssure[]>;


const typesAssureUrl = environment.typesAssureUrl;

@Injectable({
  providedIn: 'root'
})
export class TypesAssureService {
  constructor(protected http: HttpClient) {}

  create(typesAssure: ITypesAssure): Observable<EntityResponseType> {
    return this.http.post<ITypesAssure>(typesAssureUrl, typesAssure, { observe: 'response' });
  }

  update(typesAssure: ITypesAssure): Observable<EntityResponseType> {
    return this.http.put<ITypesAssure>(typesAssureUrl, typesAssure, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypesAssure>(`${typesAssureUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypesAssure[]>(typesAssureUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    // return this.http.get<ITypesAssure[]>("assets/data/typesAssures.json", { observe: 'response' });
    return this.http.get<ITypesAssure[]>(typesAssureUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${typesAssureUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ITypesAssure[]>(typesAssureUrl, { observe: 'response' });
  }
}
