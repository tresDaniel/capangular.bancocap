import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { Conta } from 'src/app/model/conta.model';

@Component({
  selector: 'app-conta-view',
  templateUrl: './conta-view.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ContaViewComponent implements OnInit {
  conta:Conta = {cliente: "Kalila",hash:"1234463131",saldo: 2516};
  
  colunas = [
    { field: 'cliente' },
    { field: 'hash' },
    { field: 'saldo', valueFormatter: params => this.currencyFormatter(params.data.saldo, 'R$')  },
  ];

  linhas = [
      { cliente: 'Arthur', hash: '148dd0b42344110d2b47dec848327284', saldo: 500 },
      { cliente: 'Daniel', hash: '248dd0b42344110d2b47dec848327284', saldo: 255 },
      { cliente: 'Kalila', hash: '348dd0b42344110d2b47dec848327284', saldo: 950 },
      { cliente: 'Nilson', hash: '448dd0b42344110d2b47dec848327284', saldo: 260},
      { cliente: 'Reinaldo', hash: '548dd0b42344110d2b47dec848327284', saldo: 389},
  ];

  constructor() { }

  currencyFormatter(saldo, sign) {
    var decimal = saldo.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' +formatado;
  }

  ngOnInit(): void {
  }

}
