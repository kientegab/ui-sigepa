import { Injectable } from '@angular/core';
import { IEmploi } from '../model/emploi.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<IEmploi>;
type EntityArrayResponseType = HttpResponse<IEmploi[]>;

const emploiUrl = environment.emploiUrl;

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private http:HttpClient) { }

  create(exemple: IEmploi): Observable<EntityResponseType> {
    return this.http.post<IEmploi>(emploiUrl, exemple, { observe: 'response' });
  }

  update(exemple: IEmploi): Observable<EntityResponseType> {
    return this.http.put<IEmploi>(emploiUrl, exemple, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IEmploi>(`${emploiUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IEmploi[]>(emploiUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
  //  return this.http.get<IEmploi[]>("assets/data/emplois.json", { observe: 'response' });
     return this.http.get<IEmploi[]>(emploiUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${emploiUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IEmploi[]>(emploiUrl, { observe: 'response' });
  }
}
