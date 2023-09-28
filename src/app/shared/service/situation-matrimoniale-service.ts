import { Injectable } from '@angular/core';
import { Commune } from '../model/commune.model';
//import { HttpClient } from '@angular/common/http';
//import { Commune, GetAllCommuneResponse } from '../model/commune.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISituationMatrimoniale } from '../model/situationMatrimoniale.model';
import { createRequestOption } from '../util/request-util';
type EntityResponseType = HttpResponse<ISituationMatrimoniale>;
type EntityArrayResponseType = HttpResponse<ISituationMatrimoniale[]>;
const situationMatrimonialeUrl = environment.situationMatrimonialeUrl;

@Injectable({
  providedIn: 'root'
})
export class SituationMatrimonialeService {

  constructor(private http:HttpClient) { }
  

  create(situationMatrimoniale: ISituationMatrimoniale): Observable<EntityResponseType> {
    return this.http.post<ISituationMatrimoniale>(situationMatrimonialeUrl, situationMatrimoniale, { observe: 'response' });
  }

  update(situationMatrimoniale: ISituationMatrimoniale): Observable<EntityResponseType> {
    return this.http.put<ISituationMatrimoniale>(situationMatrimonialeUrl, situationMatrimoniale, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISituationMatrimoniale>(`${situationMatrimonialeUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISituationMatrimoniale[]>(situationMatrimonialeUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<ISituationMatrimoniale[]>("assets/data/situationMatrimoniale.json", { observe: 'response' });
    // return this.http.get<ISituationMatrimoniale[]>(situationMatrimonialeUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${situationMatrimonialeUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ISituationMatrimoniale[]>(situationMatrimonialeUrl, { observe: 'response' });
  }
}
