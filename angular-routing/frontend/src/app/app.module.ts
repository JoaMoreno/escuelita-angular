import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Modules
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './cliente/clientes.module';
import { FormularioModule } from './formulario/formulario.module';
import { GlobalComponentsModule } from './global-components/global-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalComponentsModule,
    AuthModule,
    ClientesModule,
    FormularioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
