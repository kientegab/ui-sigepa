import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';
import { IEntreeSortie } from '../model/entree-sortie';

type EntityResponseType = HttpResponse<IEntreeSortie>;
type EntityArrayResponseType = HttpResponse<IEntreeSortie[]>;

const entreeSortieUrl = environment.entreeSortieUrl;

@Injectable({
  providedIn: 'root'
})
export class EntreeSortieService {

  constructor(private http:HttpClient) { }
  create(entreeSorties: IEntreeSortie): Observable<EntityResponseType> {
    return this.http.post<IEntreeSortie>(entreeSortieUrl, entreeSorties, { observe: 'response' });
  }

  update(entreeSorties: IEntreeSortie): Observable<EntityResponseType> {
    return this.http.put<IEntreeSortie>(entreeSortieUrl, entreeSorties, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IEntreeSortie>(`${entreeSortieUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IEntreeSortie[]>(entreeSortieUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IEntreeSortie[]>(entreeSortieUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${entreeSortieUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IEntreeSortie[]>(entreeSortieUrl, { observe: 'response' });
  }
}