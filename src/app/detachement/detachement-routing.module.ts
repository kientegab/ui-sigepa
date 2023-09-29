import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetachementComponent } from './detachement.component';
import { DetachementAgentsComponent } from './detachement-agents/detachement-agents.component';

const routes: Routes = [
  {
    path:'', component: DetachementComponent
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
