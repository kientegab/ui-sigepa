import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { LazyLoadEvent } from 'primeng/api';
import { environment } from 'src/environments/environment';
import {  ISection, Section } from '../model/section.model';

type EntityResponseType = HttpResponse<ISection>;
type EntityArrayResponseType = HttpResponse<ISection[]>;

const sectionUrl = environment.sectionUrl;

@Injectable({
  providedIn: 'root'
})
export class SectionService {

    constructor(private http:HttpClient) { }
   
    create(section: ISection): Observable<EntityResponseType> {
      return this.http.post<ISection>(sectionUrl, section, { observe: 'response' });
    }
  
    update(section: ISection): Observable<EntityResponseType> {
      return this.http.put<ISection>(sectionUrl, section, { observe: 'response' });
    }
  
    find(id: number): Observable<EntityResponseType> {
      return this.http.get<ISection>(`${sectionUrl}/${id}`, { observe: 'response' });
    }
  
    query(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http.get<ISection[]>(sectionUrl, { params: options, observe: 'response' });
    }
  
     findAll(event?: LazyLoadEvent): Observable<EntityArrayResponseType> {
      return this.http.get<ISection[]>(sectionUrl+'/liste', { observe: 'response' });
    }
  
    delete(id: number): Observable<HttpResponse<{}>> {
      return this.http.delete(`${sectionUrl}/${id}`, { observe: 'response' });
    }
  
    findListe(): Observable<EntityArrayResponseType> {
      return this.http.get<ISection[]>(sectionUrl, { observe: 'response' });
    }
}
