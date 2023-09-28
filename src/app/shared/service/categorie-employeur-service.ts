import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetAllCategorieEmployeurResponse, CategorieEmployeur } from '../model/categorieEmployeur.model';
const categorieEmployeurUrl = environment.categorieEmployeurUrl;

@Injectable({
  providedIn: 'root'
})
export class CategorieEmployeurService {

  constructor(private http:HttpClient) { }
  getAll(event?: LazyLoadEvent): Observable<GetAllCategorieEmployeurResponse> {
      // return this.http.get("assets/data/categorieemployeurs.json", { observe: 'response' })
    return this.http.get(categorieEmployeurUrl, { observe: 'response' })
    .pipe(map(response => {
        let articleResponse: GetAllCategorieEmployeurResponse = {
          categorieEmployeurs: response.body as CategorieEmployeur[]
        };
        return articleResponse;
      }));
  }
  create(categorieEmployeur: CategorieEmployeur): Observable<CategorieEmployeur> {
    return this.http.post<CategorieEmployeur>(categorieEmployeurUrl, categorieEmployeur);
  }

  update(categorieEmployeur: CategorieEmployeur): Observable<CategorieEmployeur> {
    return this.http.put<CategorieEmployeur>(categorieEmployeurUrl, categorieEmployeur);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${categorieEmployeurUrl}/${id}`);
  }
}