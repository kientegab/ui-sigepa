import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITypesPiece } from '../model/typesPieces.model';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<ITypesPiece>;
type EntityArrayResponseType = HttpResponse<ITypesPiece[]>;

const typesPieceUrl = environment.typesPieceUrl;

@Injectable({
  providedIn: 'root'
})
export class TypesPieceService {
    constructor(private http:HttpClient) { }

    create(typePieces: ITypesPiece): Observable<EntityResponseType> {
      return this.http.post<ITypesPiece>(typesPieceUrl, typePieces, { observe: 'response' });
    }

    update(typePieces: ITypesPiece): Observable<EntityResponseType> {
      return this.http.put<ITypesPiece>(typesPieceUrl, typePieces, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
      return this.http.get<ITypesPiece>(`${typesPieceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<ITypesPiece[]>(typesPieceUrl, { params: options, observe: 'response' });
    }

    findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
     // return this.http.get<ITypesPiece[]>("assets/data/typesPieces.json", { observe: 'response' });
      return this.http.get<ITypesPiece[]>(typesPieceUrl, { observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
      return this.http.delete(`${typesPieceUrl}/${id}`, { observe: 'response' });
    }

    findListe(): Observable<EntityArrayResponseType> {
      return this.http.get<ITypesPiece[]>(typesPieceUrl, { observe: 'response' });
    }
}
