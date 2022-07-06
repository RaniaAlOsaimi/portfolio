import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import{ContentComponent}from '../app/content/content.component';

const routes: Routes = [
  {path:'About', component: AboutComponent},
  {path:'Home', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
