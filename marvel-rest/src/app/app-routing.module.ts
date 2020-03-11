import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { Comunicacion1Component } from './components/comunicacion1/comunicacion1.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"rxjs", component: RxjsComponent},
  {path: "comun", component: Comunicacion1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
