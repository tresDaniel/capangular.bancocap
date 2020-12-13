import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteViewComponent } from './component/cliente/cliente-view/cliente-view.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ContaViewComponent } from './component/conta/conta-view/conta-view.component';
import { ContaComponent } from './component/conta/conta.component';
import { DepositoComponent } from './component/deposito/deposito.component';
import { ExtratoComponent } from './component/extrato/extrato.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RecuperarSenhaComponent } from './component/recuperar-senha/recuperar-senha.component';
import { SaqueComponent } from './component/saque/saque.component';
import { TransferenciaComponent } from './component/transferencia/transferencia.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'cliente', component:ClienteComponent},
  {path: 'perfil', component:ClienteViewComponent},
  {path: 'conta', component:ContaComponent},
  {path: 'dados-conta', component:ContaViewComponent},
  {path: 'home', component:HomeComponent},
  {path: 'recuperar-senha', component:RecuperarSenhaComponent},
  {path: 'deposito', component:DepositoComponent},
  {path: 'saque', component:SaqueComponent},
  {path: 'transferencia', component:TransferenciaComponent},
  {path: 'extrato', component:ExtratoComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
