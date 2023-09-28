import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs/internal/Observable';
import { GetAllTypesCotisationsResponse, ITypesCotisation, TypesCotisation } from '../model/typesCotisations.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<ITypesCotisation>;
type EntityArrayResponseType = HttpResponse<ITypesCotisation[]>;
const typesCotisationUrl = environment.typesCotisationUrl;
@Injectable({
  providedIn: 'root'
})
export class TypeCotisationService {

  create(typeCotisation: ITypesCotisation): Observable<EntityResponseType> {
    return this.http.post<ITypesCotisation>(typesCotisationUrl, typeCotisation, { observe: 'response' });
  }

  update(typeCotisation: ITypesCotisation): Observable<EntityResponseType> {
    return this.http.put<ITypesCotisation>(typesCotisationUrl, typeCotisation, { observe: 'response' });
  }

  constructor(private http:HttpClient) { }
  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITypesCotisation>(`${typesCotisationUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITypesCotisation[]>(typesCotisationUrl, { params: options, observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    //return this.http.get<ITcotisation[]>("assets/data/typesCotisation.json", { observe: 'response' });
    rep:return this.http.get<ITypesCotisation[]>(typesCotisationUrl, { observe: 'response' });
    /*console.log(rep);*/
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${typesCotisationUrl}/${id}`, { observe: 'response' });
  }

  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ITypesCotisation[]>(typesCotisationUrl, { observe: 'response' });
  }
}
