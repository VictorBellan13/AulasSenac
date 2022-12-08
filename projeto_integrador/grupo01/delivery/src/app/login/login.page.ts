import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = '';
  senha = '';


  constructor(private rota: Router) { }

  ngOnInit() {
  }

  entrar(){
    this.rota.navigate(['/tabs/home'])
    
  }

  cadastro(){
    this.rota.navigate(['/cadastro'])
  }

}
