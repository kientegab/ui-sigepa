import { Component } from '@angular/core';
import {TypeDemande} from "../../../../shared/model/typeDemande.model";

@Component({
  selector: 'app-detail-type-demande',
  templateUrl: './detail-type-demande.component.html',
  styleUrls: ['./detail-type-demande.component.scss']
})
export class DetailTypeDemandeComponent {
    typedemande: TypeDemande = new TypeDemande();

}
