import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';
import {GetAllTypeDemandeResponse, ITypeDemande} from "../model/typeDemande.model";

type EntityResponseType = HttpResponse<ITypeDemande>;
type EntityArrayResponseType = HttpResponse<ITypeDemande[]>;


const typeDemandeUrl = environment.communeUrl+'type-demandes';

@Injectable({
  providedIn: 'root'
})
export class TypeDemandeService {

  constructor(private http:HttpClient) { }

  create(structure: ITypeDemande): Observable<EntityResponseType> {
    return this.http.post<ITypeDemande>(typeDemandeUrl, structure, { observe: 'response' });
  }

  update(structure: ITypeDemande): Observable<EntityResponseType> {
    return this.http.put<ITypeDemande>(typeDemandeUrl, structure, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypeDemande>(`${typeDemandeUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypeDemande[]>(typeDemandeUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<ITypeDemande[]>(typeDemandeUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${typeDemandeUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ITypeDemande[]>(typeDemandeUrl, { observe: 'response' });
  }

  getAll(event?: LazyLoadEvent): Observable<any> {
    return this.http.get(typeDemandeUrl, { observe: 'response' })
    .pipe(map(response => {
        let structureResponse: GetAllTypeDemandeResponse = {
          typeDemandes: response.body as ITypeDemande[]
        };
        return structureResponse;
      }));
  }
}
