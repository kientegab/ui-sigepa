import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICircuit } from '../model/circuit.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';

type EntityResponseType = HttpResponse<ICircuit>;
type EntityArrayResponseType = HttpResponse<ICircuit[]>;
// const communeUrl = environment.communeUrl;
const communeUrl = "";
@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private http:HttpClient) { }
  create(circuit: ICircuit): Observable<EntityResponseType> {
    return this.http.post<ICircuit>(communeUrl, circuit, { observe: 'response' });
  }

  update(circuit: ICircuit): Observable<EntityResponseType> {
    return this.http.put<ICircuit>(communeUrl, circuit, { observe: 'response' });
  }

  findCommuneByIdProvince(id: number): Observable<EntityArrayResponseType> {
    return this.http.get<ICircuit[]>(`${communeUrl}/liste/${id}`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${communeUrl}/${id}`, { observe: 'response' });
  }
  
  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<ICircuit[]>(communeUrl, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
     return this.http.get<ICircuit[]>(communeUrl, { params: options, observe: 'response' });
  }
}
