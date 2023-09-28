import { Injectable } from '@angular/core';
import { IExempleEtape1 } from '../exemple-etape1';
import { Subject } from 'rxjs';
import { IExempleEtape2 } from '../exemple-etape2';

@Injectable({
  providedIn: 'root'
})
export class StepExempleService {

  public dataChangeEtape1 = new Subject<IExempleEtape1>();

  public dataChangeEtape2 = new Subject<IExempleEtape2>();

  constructor() { }
  
  setDataEtape1(data: IExempleEtape1) {        
    this.dataChangeEtape1.next(data);
  }

  setDataEtape2(data: IExempleEtape2) {        
    this.dataChangeEtape2.next(data);
  }
}
