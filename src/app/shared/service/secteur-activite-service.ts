import { Injectable } from '@angular/core';
import { Commune } from '../model/commune.model';
import { HttpClient } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {GetAllSecteurResponse, SecteurActivite} from "../model/secteurActivite.model";
const secteurActiviteUrl = environment.secteurActiviteUrl;

@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {

  constructor(private http:HttpClient) { }
  getAll(event?: LazyLoadEvent): Observable<GetAllSecteurResponse> {
    // return this.http.get(communeUrl, { observe: 'response' })
    return this.http.get(secteurActiviteUrl, { observe: 'response' })
    .pipe(map(response => {
        let secteurs: GetAllSecteurResponse = {
          secteurActivites: response.body as SecteurActivite[]
        };
        return secteurs;
      }));
  }
  create(secteurActivite: SecteurActivite): Observable<SecteurActivite> {
    return this.http.post<SecteurActivite>(secteurActiviteUrl, secteurActivite);
  }

  update(secteurActivite: SecteurActivite): Observable<SecteurActivite> {
    return this.http.put<SecteurActivite>(secteurActiviteUrl, secteurActivite);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${secteurActiviteUrl}/${id}`);
  }
}
