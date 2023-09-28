import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProfession } from '../model/profession.model';
import { createRequestOption } from '../util/request-util';

const professionUrl = environment.professionUrl;

type EntityResponseType = HttpResponse<IProfession>;
type EntityArrayResponseType = HttpResponse<IProfession[]>;

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private http:HttpClient) { }

  create(profession: IProfession): Observable<EntityResponseType> {
    return this.http.post<IProfession>(professionUrl, profession, { observe: 'response' });
  }

  update(profession: IProfession): Observable<EntityResponseType> {
    return this.http.put<IProfession>(professionUrl, profession, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProfession>(`${professionUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProfession[]>(professionUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
   // return this.http.get<IProfession[]>("assets/data/professions.json", { observe: 'response' });
     return this.http.get<IProfession[]>(professionUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${professionUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IProfession[]>(professionUrl, { observe: 'response' });
  }
}
