import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PublicTaskComponent } from './auth/public-task/public-task.component';
import { PrivateTaskComponent } from './auth/private-task/private-task.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { AltaClienteComponent } from './cliente/components/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './cliente/components/listado-clientes/listado-clientes.component';
import { SimpleFormComponent } from './formulario/simple-form/simple-form.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './auth/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: 'tasks', component: PublicTaskComponent},
  // {path: 'private', component: PrivateTaskComponent},
  // {path: 'singin', component: SinginComponent},
  // {path: 'singup', component: SingupComponent},
  // {path: 'alta', component: AltaClienteComponent},
  // {path: 'clientes', component: ListadoClientesComponent},
  //{path: 'dev', component: SimpleFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes }