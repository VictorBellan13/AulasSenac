import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  produtos: any[] = [];
  categorias: any[] = [];  
    
  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.api.obter('produtos')
    .subscribe( result => this.produtos = result);
    this.api.obter('categorias')
    .subscribe( result => this.categorias = result);
  }





}
