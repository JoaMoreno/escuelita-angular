import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClientesService } from './services/clientes.service';
import { AltaClienteComponent } from './components/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [AltaClienteComponent, ListadoClientesComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers: [
    ClientesService
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule { }