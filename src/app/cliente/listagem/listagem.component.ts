import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  clientes: Cliente[] = [];
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    console.log('ListagemComponent - ngOnInit');
    this.carregarCliente();
  }

  carregarCliente(): void {
    console.log('Carregando clientes...');
    this.clienteService.listarClientes().subscribe((res) => {
      this.clientes = res;
      console.log('Clientes carregados:', this.clientes);
    });
  }

  cadastrar() {
    this.router.navigate(['/cadastrar']);
  }

  editar(cliente: Cliente) {
    this.router.navigate(['/editar', cliente.id]);
  }

  deletar(cliente: Cliente) {
    this.clienteService.deletarCliente(cliente.id).subscribe(() => {
      this.carregarCliente();
    });
  }


}
