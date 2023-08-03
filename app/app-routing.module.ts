import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // Ruta para la página de inicio
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Ruta para la página de servicios
  { path: 'services', component: ServicesComponent },

  // Ruta para la página del equipo
  { path: 'team', component: TeamComponent },

  // Ruta para la página de contacto
  { path: 'contact', component: ContactComponent },


  // Ruta por defecto para redireccionar a la página de inicio si la ruta no coincide
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
// })
// export class AppRoutingModule { }

