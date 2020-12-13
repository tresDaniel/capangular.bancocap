import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Deposito } from 'src/app/model/deposito.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  deposito:Deposito = {};
  error:boolean = false;
  errorDesc: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.deposito.dataHora = new Date();
    
  }

  realizarDeposito(form: NgForm){
    var valor = form.value.valor;
    var hash = form.value.hash;

    if (!hash) {
      this.error = true;      
      this.errorDesc = "Preencha o campo hash"
    } else if(!valor){
      this.error = true;      
      this.errorDesc = "Preencha o campo valor"  
    } else if (form.valid){
      this.router.navigate(['/home']);
    }
  }

}
