import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FichesComponent} from './fiches/fiches.component';
import {SectionComponent} from './section/section.component';

const routes: Routes = [
  {path: 'fiche', component: FichesComponent},
  {path: 'section', component: SectionComponent},
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
