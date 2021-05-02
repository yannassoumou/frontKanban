import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FichesComponent} from './fiches/fiches.component';
import {AjoutFicheComponent} from './ajout-fiche/ajout-fiche.component';
import {SectionComponent} from './section/section.component';
import {KanbanComponent} from './kanban/kanban.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kanban', component: KanbanComponent},
  {path: 'fiche', component: FichesComponent},
  {path: 'section', component: SectionComponent},
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
