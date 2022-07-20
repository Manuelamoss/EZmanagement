import { Component, OnInit } from '@angular/core';
import { Cliente, Telefone } from '../models/cliente/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css'],
})
export class AddClienteComponent implements OnInit {
  cliente: Cliente = {
    token: '',
    document: '',
    responsible: '',
    address: '',
    zipcode: '',
    email: '',
    password: '',
    status: true,
    description: '',
  };
  telefone: Telefone = {
    id: '',
    telefone: 0,
  };
  submitted = false;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}
  saveCliente(): void {
    const data = {
      token: this.cliente.token,
      document: this.cliente.document,
      responsible: this.cliente.responsible,
      address: this.cliente.address,
      zipcode: this.cliente.zipcode,
      email: this.cliente.email,
      password: this.cliente.password,
      status: this.cliente.status,
      description: this.cliente.description,
    };
    this.clienteService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      token: '',
      document: '',
      responsible: '',
      address: '',
      zipcode: '',
      status: true,
      description: '',
      email: '',
      password: '',
    };
  }
}
