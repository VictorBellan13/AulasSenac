import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  constructor(private rota: Router) { }



  ngOnInit() {

  }

  irEndereco(){
    this.rota.navigate(['/tabs/endereco'])
    
  }

}
