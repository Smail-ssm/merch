import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat/contrat.component';
import { AjouterContratComponent } from './ajouter-contrat/ajouter-contrat.component';
import { ListerContratComponent } from './lister-contrat/lister-contrat.component';
import { ModifierContratComponent } from './modifier-contrat/modifier-contrat.component';

const routes: Routes = [
  {
    path: '',
    component: ContratComponent,
    children: [
      { path: 'ajoutercontrat', component: AjouterContratComponent },
      { path: 'listecontrats', component: ListerContratComponent },
      { path: 'modifiercontart', component: ModifierContratComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratRoutingModule {}
