import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMotif } from '../model/motif.model';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<IMotif>;
type EntityArrayResponseType = HttpResponse<IMotif[]>;


const motifUrl = "assets/data/motif.json";

@Injectable({
  providedIn: 'root'
})
export class MotifService {
  constructor(private http:HttpClient) { }

  create(motif: IMotif): Observable<EntityResponseType> {
    return this.http.post<IMotif>(motifUrl, motif, { observe: 'response' });
  }

  update(groupe: IMotif): Observable<EntityResponseType> {
    return this.http.put<IMotif>(motifUrl, groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IMotif>(`${motifUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMotif[]>(motifUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IMotif[]>(motifUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${motifUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IMotif[]>(motifUrl, { observe: 'response' });
  }


}