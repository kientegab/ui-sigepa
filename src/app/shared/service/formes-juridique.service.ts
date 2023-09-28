import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { IFormeJuridique } from '../model/formesJuridiques.model';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<IFormeJuridique>;
type EntityArrayResponseType = HttpResponse<IFormeJuridique[]>;
const formesJuridiqueUrl = environment.formesJuridiqueUrl;

@Injectable({
  providedIn: 'root'
})
export class FormesJuridiqueService {

  constructor(private http:HttpClient) { }
  create(formeJuridique: IFormeJuridique): Observable<EntityResponseType> {
    return this.http.post<IFormeJuridique>(formesJuridiqueUrl, formeJuridique, { observe: 'response' });
  }

  update(formeJuridique: IFormeJuridique): Observable<EntityResponseType> {
    return this.http.put<IFormeJuridique>(formesJuridiqueUrl, formeJuridique, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IFormeJuridique>(`${formesJuridiqueUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IFormeJuridique[]>(formesJuridiqueUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
  //  return this.http.get<IFormeJuridique[]>("assets/data/formesJuridique.json", { observe: 'response' });
     return this.http.get<IFormeJuridique[]>(formesJuridiqueUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${formesJuridiqueUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IFormeJuridique[]>(formesJuridiqueUrl, { observe: 'response' });
  }
}
