import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cliente: Cliente = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    dataCadastro: new Date(),
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  salvar(){
    this.clienteService.cadastrarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/listar']);
    }, error => {
      console.error('Erro ao cadastrar cliente:', error);
    });
  }

}
