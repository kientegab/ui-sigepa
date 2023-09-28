import { Injectable } from '@angular/core';
import { IAssureEtape2 } from '../assure-etape2';
import { Subject } from 'rxjs';
import { IAssureEtape1 } from '../assure-etape1';
import { IAssureEtape3 } from '../assure-step3';
import { IAssureEtape4 } from '../assure-etape4';

@Injectable({
  providedIn: 'root'
})
export class StepAssureService {


    public dataChangeEtape1 = new Subject<IAssureEtape1>();

    public dataChangeEtape2 = new Subject<IAssureEtape2>();

    public dataChangeEtape3 = new Subject<IAssureEtape3>();

    public dataChangeEtape4 = new Subject<IAssureEtape4>();


    constructor() { }

    setDataEtape1(data: IAssureEtape1) {
      this.dataChangeEtape1.next(data);
    }

    setDataEtape2(data: IAssureEtape2) {
      this.dataChangeEtape2.next(data);
    }

    setDataEtape3(data: IAssureEtape3) {
        this.dataChangeEtape3.next(data);
      }

      setDataEtape4(data: IAssureEtape4) {
        this.dataChangeEtape4.next(data);
      }
}
