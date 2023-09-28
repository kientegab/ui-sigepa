import { Injectable } from '@angular/core';
import { IGroupe, GetAllGroupeResponse } from '../model/groupe.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';

//Changer apres pour recuperer les divions à la place
//import { GetAllCommuneResponse } from '../model/commune.model';

type EntityResponseType = HttpResponse<IGroupe>;
type EntityArrayResponseType = HttpResponse<IGroupe[]>;


const groupeUrl = environment.groupeURL;

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http:HttpClient) { }

  create(groupe: IGroupe): Observable<EntityResponseType> {
    return this.http.post<IGroupe>(groupeUrl, groupe, { observe: 'response' });
  }

  update(groupe: IGroupe): Observable<EntityResponseType> {
    return this.http.put<IGroupe>(groupeUrl, groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IGroupe>(`${groupeUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IGroupe[]>(groupeUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IGroupe[]>(groupeUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${groupeUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IGroupe[]>(groupeUrl, { observe: 'response' });
  }

  getAll(event?: LazyLoadEvent): Observable<any> {
    return this.http.get(groupeUrl, { observe: 'response' })
    .pipe(map(response => {
        let groupeResponse: GetAllGroupeResponse = {
          groupes: response.body as IGroupe[]
        };
        return groupeResponse;
      }));
  }
}