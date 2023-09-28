import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITypesPiece } from '../model/typesPieces.model';
import { createRequestOption } from '../util/request-util';
import {ITypeActeGenerated} from "../model/typeActeGenerated.model";
import {ISignataire} from "../model/signataire.model";
import {ISignataireTypeActe} from "../model/signataire-type-acte";

type EntityResponseType = HttpResponse<ISignataire>;
type EntityArrayResponseType = HttpResponse<ISignataire[]>;

const signataireUrl = environment.signataireUrl;

@Injectable({
  providedIn: 'root'
})
export class SignataireService {
    constructor(private http:HttpClient) { }

    create(signataire: ISignataire): Observable<EntityResponseType> {
      return this.http.post<ISignataire>(signataireUrl, signataire, { observe: 'response' });
    }

    update(signataire: ISignataire): Observable<EntityResponseType> {
      return this.http.put<ISignataire>(signataireUrl, signataire, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
      return this.http.get<ISignataire>(`${signataireUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<ISignataire[]>(signataireUrl, { params: options, observe: 'response' });
    }

    findAll(event?: LazyLoadEvent): Observable<HttpResponse<ISignataireTypeActe[]>> {
      return this.http.get<ISignataireTypeActe[]>(signataireUrl+'/delegation', { observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
      return this.http.delete(`${signataireUrl}/${id}`, { observe: 'response' });
    }

    findListe(): Observable<EntityArrayResponseType> {
      return this.http.get<ISignataire[]>(signataireUrl, { observe: 'response' });
    }
}
