import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITypesPiece } from '../model/typesPieces.model';
import { createRequestOption } from '../util/request-util';
import {ITypeActeGenerated} from "../model/typeActeGenerated.model";

type EntityResponseType = HttpResponse<ITypeActeGenerated>;
type EntityArrayResponseType = HttpResponse<ITypeActeGenerated[]>;

const typeActeGeneratedUrl = environment.typeActeGeneratedUrl;

@Injectable({
  providedIn: 'root'
})
export class TypeActeService {
    constructor(private http:HttpClient) { }

    create(typeActe: ITypeActeGenerated): Observable<EntityResponseType> {
      return this.http.post<ITypeActeGenerated>(typeActeGeneratedUrl, typeActe, { observe: 'response' });
    }

    update(typeActe: ITypeActeGenerated): Observable<EntityResponseType> {
      return this.http.put<ITypeActeGenerated>(typeActeGeneratedUrl, typeActe, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
      return this.http.get<ITypeActeGenerated>(`${typeActeGeneratedUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<ITypeActeGenerated[]>(typeActeGeneratedUrl, { params: options, observe: 'response' });
    }

    findAll(): Observable<EntityArrayResponseType> {
      return this.http.get<ITypeActeGenerated[]>(typeActeGeneratedUrl, { observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
      return this.http.delete(`${typeActeGeneratedUrl}/${id}`, { observe: 'response' });
    }

    findListe(): Observable<EntityArrayResponseType> {
      return this.http.get<ITypeActeGenerated[]>(typeActeGeneratedUrl, { observe: 'response' });
    }
}
