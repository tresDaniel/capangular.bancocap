import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Saque } from 'src/app/model/saque.model';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  
  saque:Saque = {};
  error:boolean = false;
  errorDesc: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.saque.dataHora = new Date();
    
  }

  realizarSaque(form: NgForm){
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
