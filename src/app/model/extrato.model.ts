import { Operacao } from "./operacao.model"

export interface Extrato extends Operacao{
    tipoOperacao?: string
}