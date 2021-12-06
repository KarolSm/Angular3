import { FilteredComponent } from './components/filtered/filtered.component';
import { GazetyComponent } from './components/gazety/gazety.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: GazetyComponent },
  { path: ':magazyn', component: FilteredComponent }, //parametr
  // { path: '', redirectTo: "/", pathMatch: "full" }, //przekierowanie
  { path: '**', redirectTo: "/", pathMatch: "full" } //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
