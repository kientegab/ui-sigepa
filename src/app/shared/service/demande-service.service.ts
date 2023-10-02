import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDemande } from '../model/demande.model';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';

type EntityResponseType = HttpResponse<IDemande>;
type EntityArrayResponseType = HttpResponse<IDemande[]>;


const demandeUrl = "assets/data/demande.json";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  create(visa: IDemande): Observable<EntityResponseType> {
    return this.http.post<IDemande>(demandeUrl, visa, { observe: 'response' });
  }

  update(groupe: IDemande): Observable<EntityResponseType> {
    return this.http.put<IDemande>(demandeUrl, groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDemande>(`${demandeUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDemande[]>(demandeUrl, { params: options, observe: 'response' });
  }

  findDemandesAgents(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDemande[]>(demandeUrl+'/demandesAgents', { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IDemande[]>(demandeUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${demandeUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IDemande[]>(demandeUrl, { observe: 'response' });
  }
}
