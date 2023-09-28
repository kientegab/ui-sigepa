import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { IExemple } from '../model/exemple';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import {IEmploiAssure} from "../model/emploi-assure";

type EntityResponseType = HttpResponse<IEmploiAssure>;
type EntityArrayResponseType = HttpResponse<IEmploiAssure[]>;

const resourceUrl = environment.communeUrl+'/emploi-assure';

@Injectable({
  providedIn: 'root'
})
export class EmploiAssureService {
  constructor(protected http: HttpClient) {}

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IEmploiAssure>(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IEmploiAssure[]>(resourceUrl, { params: options, observe: 'response' });
  }
   findAllByNumAssure(numeroAssure: string,event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IEmploiAssure[]>(`${resourceUrl}/${numeroAssure}`, { observe: 'response' });
  }

}
