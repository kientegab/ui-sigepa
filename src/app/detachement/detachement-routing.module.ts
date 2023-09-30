import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetachementComponent } from './detachement.component';
import { DetachementAgentsComponent } from './detachement-agents/detachement-agents.component';
import {CreerModifierDetachementComponent} from "./creer-modifier-detachement/creer-modifier-detachement.component";

const routes: Routes = [
  {
    path:'', component: DetachementComponent
  },
    {
        path:'nouveau', component: CreerModifierDetachementComponent
    },
  {
    path:'agents', component: DetachementAgentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetachementRoutingModule { }
