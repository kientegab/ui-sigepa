import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { ITypeEmployeur } from '../model/typeEmployeur.model';


type EntityResponseType = HttpResponse<ITypeEmployeur>;
type EntityArrayResponseType = HttpResponse<ITypeEmployeur[]>;
const typeEmployeurUrl = environment.typeEmployeurUrl;

@Injectable({
  providedIn: 'root'
})
export class TypeEmployeurService {

  constructor(private http:HttpClient) { }

  create(typeEmployeur: ITypeEmployeur): Observable<EntityResponseType> {
    return this.http.post<ITypeEmployeur>(typeEmployeurUrl, typeEmployeur, { observe: 'response' });
  }

  update(typeEmployeur: ITypeEmployeur): Observable<EntityResponseType> {
    return this.http.put<ITypeEmployeur>(typeEmployeurUrl, typeEmployeur, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypeEmployeur>(`${typeEmployeurUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypeEmployeur[]>(typeEmployeurUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    //return this.http.get<ITypeEmployeur[]>("assets/data/typeEmployeurs.json", { observe: 'response' });
     return this.http.get<ITypeEmployeur[]>(typeEmployeurUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${typeEmployeurUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ITypeEmployeur[]>(typeEmployeurUrl+'/liste', { observe: 'response' });
  }
}
