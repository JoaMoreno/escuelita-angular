import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form/simple-form.component';


@NgModule({
  declarations: [SimpleFormComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SimpleFormComponent
  ]
})
export class FormularioModule { }
