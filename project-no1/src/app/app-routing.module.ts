import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
