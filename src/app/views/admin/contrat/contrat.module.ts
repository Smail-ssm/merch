import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat/contrat.component';
import { AjouterContratComponent } from './ajouter-contrat/ajouter-contrat.component';
import { ListerContratComponent } from './lister-contrat/lister-contrat.component';
import { ModifierContratComponent } from './modifier-contrat/modifier-contrat.component';


@NgModule({
  declarations: [
    ContratComponent,
    AjouterContratComponent,
    ListerContratComponent,
    ModifierContratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule
  ]
})
export class ContratModule { }
