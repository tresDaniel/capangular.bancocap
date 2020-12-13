import { Operacao } from "./operacao.model";

export interface Transferencia extends Operacao {
    hashDestino?: string
}