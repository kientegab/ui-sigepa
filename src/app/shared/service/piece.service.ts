import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { IPiece } from '../model/piece';
import { createRequestOption } from '../util/request-util';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<IPiece>;
type EntityArrayResponseType = HttpResponse<IPiece[]>;

const pieceUrl = environment.pieceUrl;

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  constructor(private http:HttpClient) { }
  create(pays: IPiece): Observable<EntityResponseType> {
    return this.http.post<IPiece>(pieceUrl, pays, { observe: 'response' });
  }

  update(pays: IPiece): Observable<EntityResponseType> {
    return this.http.put<IPiece>(pieceUrl, pays, { observe: 'response' });
  }

  findPieceByIdProvince(id: number): Observable<EntityArrayResponseType> {
    return this.http.get<IPiece[]>(`${pieceUrl}/liste/${id}`, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPiece>(`${pieceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
   // return this.http.get<IPiece[]>("assets/data/pieces.json", { params: options, observe: 'response' });
     return this.http.get<IPiece[]>(pieceUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IPiece[]>(pieceUrl+'/liste', { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${pieceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IPiece[]>(pieceUrl, { observe: 'response' });
  }
}
