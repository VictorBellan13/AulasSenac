import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  cep = '';
  endereco = '';
  numero = '';
  telefone = '';

  constructor(private rota: Router) { }

  ngOnInit() {
  }

  irPagamento(){

    this.rota.navigate(['/tabs/pagamento'])
  }

}
