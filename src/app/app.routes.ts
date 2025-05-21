import { Routes } from '@angular/router';
import { ListagemComponent } from './cliente/listagem/listagem.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { EdicaoComponent } from './cliente/edicao/edicao.component';


export const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListagemComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'editar/:id', component: EdicaoComponent },
];
