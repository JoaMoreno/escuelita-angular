import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  singupForm: FormGroup

  constructor(
    private _builder: FormBuilder
  ) {
    this.singupForm = this._builder.group({
      nombre: [''] ,
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(values){
    console.log(values);
  }

}
