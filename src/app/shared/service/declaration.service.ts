import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDeclaration } from '../model/declaration';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';
import { IEmployeur } from './../model/employeur';
type EntityResponseType = HttpResponse<IDeclaration>;
type EntityArrayResponseType = HttpResponse<IDeclaration[]>;
const resourceUrl = environment.declaration;

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  constructor(protected http: HttpClient) {}

  create(declaration: IDeclaration): Observable<EntityResponseType> {
    return this.http.post<IDeclaration>(resourceUrl, declaration, { observe: 'response' });
  }

  update(declaration: IDeclaration): Observable<EntityResponseType> {
    return this.http.put<IDeclaration>(resourceUrl, declaration, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDeclaration>(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDeclaration[]>(resourceUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IDeclaration[]>(resourceUrl, { observe: 'response' });
  }

  
  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IDeclaration[]>(resourceUrl, { observe: 'response' });
  }

  // path variable
  getEmployeurDeclaration(idEmployeur: any): Observable<EntityArrayResponseType>{
    return this.http.get<IDeclaration[]>( `${resourceUrl+'/employeur/'}${idEmployeur}`,  { observe: 'response' });
  }
}
