import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ISituationGeographique} from "../situation-geographique";
import {IIdentification} from "../../affiliation/identification";
import {IIDentification} from "../identification";
import {IStatut} from "../statut";
import {IInfoComplementaire} from "../info-complementaire";

@Injectable({
  providedIn: 'root'
})
export class StepAssureService {

  public dataChangeEtape1 = new Subject<IIDentification>();

  public dataChangeEtape2 = new Subject<ISituationGeographique>();

  public dataChangeEtape3 = new Subject<IStatut>();

  public dataBoolean = new Subject<Boolean>();

  public dataChangeEtape4 = new Subject<IInfoComplementaire>();

  constructor() { }

  setDataEtape1(data: IIdentification) {
    this.dataChangeEtape1.next(data);
  }

  setDataEtape2(data: ISituationGeographique) {
    this.dataChangeEtape2.next(data);
  }

  setDataBoolean(data: Boolean) {
    this.dataBoolean.next(data);
  }

  setDataEtape3(data: IStatut) {
    this.dataChangeEtape3.next(data);
  }

  setDataEtape4(data: IInfoComplementaire) {
    this.dataChangeEtape4.next(data);
  }

}
