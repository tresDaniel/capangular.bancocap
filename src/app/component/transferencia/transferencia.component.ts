import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/model/transferencia.model';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  transferencia: Transferencia = {};
  error:boolean = false;
  errorDesc: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.transferencia.dataHora = new Date();
    
  }

  realizarTransferencia(form: NgForm){
    var valor = form.value.valor;
    var hashOrigem = form.value.hash;
    var hashDestino = form.value.hashDestino;

    if (!hashOrigem) {
      this.error = true;      
      this.errorDesc = "Preencha o campo hash de origem"
    } if (!hashDestino) {
      this.error = true;      
      this.errorDesc = "Preencha o campo hash de destino"
    } else if(!valor){
      this.error = true;      
      this.errorDesc = "Preencha o campo valor"  
    } else if (form.valid){
      this.router.navigate(['/home']);
    }
  }

}
