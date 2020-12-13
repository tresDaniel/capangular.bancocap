import { Component, OnInit } from '@angular/core';
import { Extrato } from 'src/app/model/extrato.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extrato:Extrato = {};
  
  colunas = [
    { field: 'data' },
    { field: 'operação' },
    { field: 'valor', valueFormatter: params => this.currencyFormatter(params.data.valor, 'R$') },
    { field: 'hash' },
  ];

  linhas = [
      { data: '10/12/2020 19:30', operação: 'Saque', valor: 50, hash: '' },
      { data: '10/12/2020 19:31', operação: 'Depósito', valor: 300, hash: '' },
      { data: '11/12/2020 11:10', operação: 'Transferência', valor: 950, hash: '548dd0b42344110d2b47dec848327' },
      { data: '12/12/2020 13:17', operação: 'Transferência', valor: 260, hash: '448dd0b42344110d2b47dec848327284' },
      { data: '13/12/2020 12:54', operação: 'Saque', valor: 100, hash: '' }
  ] 

  ngOnInit(): void {
        
  }

  constructor() { }

  currencyFormatter(saldo, sign) {
    var decimal = saldo.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' + formatado;
  }

}
