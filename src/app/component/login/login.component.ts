import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario ={email:"", senha: "" };
  error:boolean = false;
  errorDesc:string = "";
  
  constructor(private router: Router) { }

  onLogin(form: NgForm){
    var email = form.value.email;
    var senha = form.value.password;

    if (!email) {
      this.error = true;      
      this.errorDesc = "Preencha o campo e-mail"
    } else if(!senha){
      this.error = true;      
      this.errorDesc = "Preencha o campo senha"  
    } else if (form.valid){
      this.router.navigate(['/home']);
    }
  }
  
  ngOnInit(): void {
  }

}
