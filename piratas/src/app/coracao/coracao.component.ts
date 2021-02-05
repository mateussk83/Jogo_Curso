import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'
@Component({
  selector: 'app-coracao',
  templateUrl: './coracao.component.html',
  styleUrls: ['./coracao.component.css']
})
export class CoracaoComponent implements OnInit { 

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true),new Coracao(true),new Coracao(true),new Coracao(true)
  ]
  @Input() public tentativas:number = 0

  constructor() {
   }
   ngOnChanges(){
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
   }
  ngOnInit() {
  }

}
