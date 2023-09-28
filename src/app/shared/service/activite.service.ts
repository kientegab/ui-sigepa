import { Injectable } from '@angular/core';
import { IActivite, GetAllActiviteResponse } from '../model/activite.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<IActivite>;
type EntityArrayResponseType = HttpResponse<IActivite[]>;


const activiteUrl = environment.activiteUrl;

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http:HttpClient) { }

  create(activite: IActivite): Observable<EntityResponseType> {
    return this.http.post<IActivite>(activiteUrl, activite, { observe: 'response' });
  }

  update(groupe: IActivite): Observable<EntityResponseType> {
    return this.http.put<IActivite>(activiteUrl, groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IActivite>(`${activiteUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IActivite[]>(activiteUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IActivite[]>(activiteUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${activiteUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IActivite[]>(activiteUrl, { observe: 'response' });
  }

  getAll(event?: LazyLoadEvent): Observable<any> {
    return this.http.get(activiteUrl, { observe: 'response' })
    .pipe(map(response => {
        let groupeResponse: GetAllActiviteResponse = {
          activites: response.body as IActivite[]
        };
        return groupeResponse;
      }));
  }
}