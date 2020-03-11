import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente, Grupo } from './../../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];

  @ViewChild("informacion",{static: true}) informacion;

  constructor(
    private clientesService: ClientesService,
    private renderer: Renderer2
    ) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
    console.log('OnInit');
    console.log(this.informacion);
    this.renderer.listen('document','mousemove',(e)=>{
      console.log(e.clientX);
      console.log(e.clientY);
    })
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
    console.log(this.informacion);
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }

}
