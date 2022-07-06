import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './add-cliente/add-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  //{ path: 'clientes', component: ClientesListComponent },
  //{ path: 'clientes/:id', component: ClienteDetailsComponent },
  { path: 'add', component: AddClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
