import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { StarComponent } from './components/partials/star/star.component';
import { DetailsComponent } from './components/pages/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: StarComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'bake/:id', component: DetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
