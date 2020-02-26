import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PublicTaskComponent } from './auth/public-task/public-task.component';
import { PrivateTaskComponent } from './auth/private-task/private-task.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { AltaClienteComponent } from './cliente/components/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './cliente/components/listado-clientes/listado-clientes.component';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'tasks', component: PublicTaskComponent},
  {path: 'private', component: PrivateTaskComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'singup', component: SingupComponent},
  {path: 'alta', component: AltaClienteComponent},
  {path: 'clientes', component: ListadoClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
