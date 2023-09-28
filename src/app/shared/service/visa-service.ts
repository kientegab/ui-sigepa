import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVisa } from '../model/visa.model';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';


type EntityResponseType = HttpResponse<IVisa>;
type EntityArrayResponseType = HttpResponse<IVisa[]>;


const visaUrl = environment.visaUrl;

@Injectable({
  providedIn: 'root'
})
export class VisaService {
  constructor(private http:HttpClient) { }

  create(visa: IVisa): Observable<EntityResponseType> {
    return this.http.post<IVisa>(visaUrl, visa, { observe: 'response' });
  }

  update(groupe: IVisa): Observable<EntityResponseType> {
    return this.http.put<IVisa>(visaUrl, groupe, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IVisa>(`${visaUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IVisa[]>(visaUrl, { params: options, observe: 'response' });
  }

   findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IVisa[]>(visaUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${visaUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IVisa[]>(visaUrl, { observe: 'response' });
  }


}
