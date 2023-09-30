import { Component } from '@angular/core';
import {TypeDemande} from "../../../../shared/model/typeDemande.model";
import {Visa} from "../../../../shared/model/visa.model";

@Component({
  selector: 'app-detail-type-demande',
  templateUrl: './detail-type-demande.component.html',
  styleUrls: ['./detail-type-demande.component.scss']
})
export class DetailTypeDemandeComponent {
    typedemande: TypeDemande = new TypeDemande();
    sizes!: any[];
    selectedSize: any = '';
    visas: Visa[] = [];
}
