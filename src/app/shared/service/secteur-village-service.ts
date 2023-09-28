import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { ISecteurVillage} from '../model/secteurvillage.model';

type EntityResponseType = HttpResponse<ISecteurVillage>;
type EntityArrayResponseType = HttpResponse<ISecteurVillage[]>;

const secteurVillageUrl = environment.secteurVillageUrl;

@Injectable({
  providedIn: 'root'
})
export class SecteurVillageService {

  constructor(private http:HttpClient) { }

  create(secteur: ISecteurVillage): Observable<EntityResponseType> {
    console.log('secteur',secteur);
    return this.http.post<ISecteurVillage>(secteurVillageUrl, secteur, { observe: 'response' });
  }

  update(secteur: ISecteurVillage): Observable<EntityResponseType> {
    return this.http.put<ISecteurVillage>(secteurVillageUrl, secteur, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISecteurVillage>(`${secteurVillageUrl}/${id}`, { observe: 'response' });
  }

  findSecteurVByIdArron(id: number): Observable<EntityArrayResponseType> {
    return this.http.get<ISecteurVillage[]>(`${secteurVillageUrl}/liste/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISecteurVillage[]>(secteurVillageUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    //return this.http.get<ISecteurVillage[]>("assets/data/secteurvillages.json", { observe: 'response' });
    return this.http.get<ISecteurVillage[]>(secteurVillageUrl, { observe: 'response' });
  }
 

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${secteurVillageUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ISecteurVillage[]>(secteurVillageUrl, { observe: 'response' });
  }
}