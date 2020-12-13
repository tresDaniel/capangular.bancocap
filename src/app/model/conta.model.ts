import { Cliente } from './cliente.model';

export interface Conta {
  hash?:string,
  cliente?:string,
  saldo?: number
}