import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SimpleFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SimpleFormComponent
  ]
})
export class FormularioModule { }
