import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FichesComponent} from './fiches/fiches.component';
import {AjoutFicheComponent} from './ajout-fiche/ajout-fiche.component';

const routes: Routes = [
  {path: 'fiche', component: FichesComponent},
  {path: 'addfiche', component: AjoutFicheComponent},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule {
}
