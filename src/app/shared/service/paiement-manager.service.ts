import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFournisseur } from '../model/fournisseur';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';
import { IFournisseurParam } from '../model/fournisseurParametre';
import { ITransaction } from '../model/transaction';
type EntityResponseType = HttpResponse<IFournisseur>;
type EntityArrayResponseType = HttpResponse<IFournisseur[]>;
type EntityResponseTypeP = HttpResponse<IFournisseurParam>;
type EntityArrayResponseTypeP = HttpResponse<IFournisseurParam[]>;
type EntityResponseTypeT = HttpResponse<ITransaction>;
type EntityArrayResponseTypeT = HttpResponse<ITransaction[]>;
const fournisseurURL = environment.fournisseurURL;
const transactionURL = environment.fournisseurURL;

@Injectable({
  providedIn: 'root'
})
export class PaiementManagerService {

  constructor(private http:HttpClient) { }

  create(fournisseur: IFournisseur): Observable<EntityResponseType> {
    return this.http.post<IFournisseur>(fournisseurURL+'fournisseur/create', fournisseur, { observe: 'response' });
  }

  update(fournisseur: IFournisseur): Observable<EntityResponseType> {
    return this.http.put<IFournisseur>(fournisseurURL+'fournisseur/update', fournisseur, { observe: 'response' });
  }

  findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
    return this.http.get<IFournisseur[]>(fournisseurURL +'fournisseur/findAll', { observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IFournisseur>(`${fournisseurURL+'fournisseur/find'}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IFournisseur[]>(fournisseurURL +'fournisseur', { params: options, observe: 'response' });
  }
  findListe(): Observable<EntityArrayResponseType> {
    return this.http.get<IFournisseur[]>(fournisseurURL+'fournisseur/findAll', { observe: 'response' });
  }
  delete(code: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${fournisseurURL +'fournisseur/delete'}/${code}`, { observe: 'response' });
  }

  //  crud parametre fournisseur

  createFournParam(fournisseurParam: IFournisseurParam): Observable<EntityResponseTypeP> {
    return this.http.post<IFournisseurParam>(fournisseurURL + 'parametrage/create', fournisseurParam, { observe: 'response' });
  }

  updateFournParam(fournisseurParam: IFournisseurParam): Observable<EntityResponseTypeP> {
    return this.http.put<IFournisseurParam>(fournisseurURL + 'parametrage/update', fournisseurParam, { observe: 'response' });
  }

  findAllFournParam(event?: LazyLoadEvent): Observable<EntityArrayResponseTypeP> {
    return this.http.get<IFournisseurParam[]>(fournisseurURL +'parametrage/findAll', { observe: 'response' });
  }

  findFournParam(code: number): Observable<EntityResponseTypeP> {
    return this.http.get<IFournisseurParam>(`${fournisseurURL +'parametrage/find'}/${code}`, { observe: 'response' });
  }

  queryFournParam(req?: any): Observable<EntityArrayResponseTypeP> {
    const options = createRequestOption(req);
    return this.http.get<IFournisseurParam[]>(fournisseurURL+'parametrage', { params: options, observe: 'response' });
  }
  deleteFournParam(code: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${fournisseurURL +'parametrage/delete'}/${code}`, { observe: 'response' });
  }

  // crud transaction

  createTrans(transaction: ITransaction): Observable<EntityResponseTypeT> {
    return this.http.post<ITransaction>(fournisseurURL+ 'transaxion/create', transaction, { observe: 'response' });
  }

  updateTrans(transaction: ITransaction): Observable<EntityResponseTypeT> {
    return this.http.put<ITransaction>(fournisseurURL+'transaxion/update', transaction, { observe: 'response' });
  }

  findAllTrans(event?: LazyLoadEvent): Observable<EntityArrayResponseTypeT> {
    return this.http.get<ITransaction[]>(fournisseurURL+'transaxion/findAll', { observe: 'response' });
  }

  findTrans(code: number): Observable<EntityResponseTypeT> {
    return this.http.get<ITransaction>(`${fournisseurURL+'transaxion/find'}/${code}`, { observe: 'response' });
  }

  queryTrans(req?: any): Observable<EntityArrayResponseTypeT> {
    const options = createRequestOption(req);
    return this.http.get<ITransaction[]>(fournisseurURL+'transaxion', { params: options, observe: 'response' });
  }
  deleteTrans(code: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${fournisseurURL +'transaxion/delete'}/${code}`, { observe: 'response' });
  }
}
