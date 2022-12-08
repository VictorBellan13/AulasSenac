import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  
  email = '';
  senha = '';
  confsenha = '';


  constructor() { }

  ngOnInit() {
  }

  entrar(){
    console.log(`email: ${this.email}, senha: ${this.senha}, confsenha: ${this.confsenha}`)
  }


}
