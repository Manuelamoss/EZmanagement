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
    documento: '',
    responsavel: '',
    endereco: '',
    cep: '',
    status: true,
    descricao: '',
    email: '',
    senha: '',
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
      documento: this.cliente.documento,
      responsavel: this.cliente.responsavel,
      endereco: this.cliente.endereco,
      cep: this.cliente.cep,
      status: this.cliente.status,
      descricao: this.cliente.descricao,
      email: this.cliente.email,
      senha: this.cliente.senha,
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
      documento: '',
      responsavel: '',
      endereco: '',
      cep: '',
      status: true,
      descricao: '',
      email: '',
      senha: '',
    };
  }
}
