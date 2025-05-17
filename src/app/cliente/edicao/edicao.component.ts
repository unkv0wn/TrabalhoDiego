import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class EdicaoComponent implements OnInit {
  cliente: Cliente = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    dataCadastro: new Date(),
  };

  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    //this.id = Number(this.route.snapshot.paramMap.get('id')); caso for id
    this.carregarCliente();
    console.log('Cliente carregado: ', this.cliente);
  }

  carregarCliente(): void {
    if (!this.id) {
      this.router.navigate(['/listar']);
    }
    this.clienteService.buscarCliente(this.id).subscribe((a) => {
      this.cliente = a;
      console.log(this.cliente);
    });
  }

  salvar() {
    if (!this.cliente) return;

    console.log('Cliente a ser atualizado: ', this.cliente);
    this.clienteService
      .atualizarCliente(this.id, this.cliente)
      .subscribe(() => {
        this.router.navigate(['/listar']);
      });
  }
}
