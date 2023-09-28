import { Injectable } from '@angular/core';
import { IIdentification } from '../identification';
import { Subject } from 'rxjs';
import { ISituationGeographique } from '../situation-geographique';
import { IFormeJuridiqueStep } from '../forme-juridique';
import { IBrancheActiviteStep } from '../branche-activite';

@Injectable({
  providedIn: 'root'
})
export class StepAffiliationService {

  public dataChangeEtape1 = new Subject<IIdentification>();

  public dataChangeEtape2 = new Subject<ISituationGeographique>();

  public dataChangeEtape3 = new Subject<IBrancheActiviteStep>();

  public dataChangeEtape4 = new Subject<IFormeJuridiqueStep>();

  constructor() { }

  setDataEtape1(data: IIdentification) {
    this.dataChangeEtape1.next(data);
  }

  setDataEtape2(data: ISituationGeographique) {
    this.dataChangeEtape2.next(data);
  }

  setDataEtape3(data: IBrancheActiviteStep) {
    this.dataChangeEtape3.next(data);
  }

  setDataEtape4(data: IFormeJuridiqueStep) {
    this.dataChangeEtape4.next(data);
  }

}
