import { Injectable } from '@angular/core';
import { IDivision, GetAllDivisionResponse } from '../model/division.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LazyLoadEvent } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';
//import { GetAllDivisionResponse } from '../model/division.model';

type EntityResponseType = HttpResponse<IDivision>;
type EntityArrayResponseType = HttpResponse<IDivision[]>;


const divisionUrl = environment.divisionUrl;

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }

  create(exemple: IDivision): Observable<EntityResponseType> {
    return this.http.post<IDivision>(divisionUrl, exemple, { observe: 'response' });
  }

  update(exemple: IDivision): Observable<EntityResponseType> {
    return this.http.put<IDivision>(divisionUrl, exemple, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IDivision>(`${divisionUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IDivision[]>(divisionUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IDivision[]>(divisionUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${divisionUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IDivision[]>(divisionUrl, { observe: 'response' });
  }

  getAll(event?: LazyLoadEvent): Observable<any> {
    return this.http.get(divisionUrl, { observe: 'response' })
    .pipe(map(response => {
        let divisionResponse: GetAllDivisionResponse = {
          divisions: response.body as IDivision[]
        };
        return divisionResponse;
      }));
  }
}