import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Perguntas } from '../shared/perguntas.model';
import { PERGUNTAS } from './perguntas-mock';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {
  public instrucao:string = 'Escolha um alternativa: '
  public perguntas: Perguntas[] = PERGUNTAS
  public rodada: number = 0
  public rodadaPerguntas: any
  public respostaCorreta: any 
  public progresso:number = 0 
  public pontuacao:any = 0 
  public timeLeft: number = 59
  public interval:any;
  public tempoPonto: number = 0
  public tentativas: number = 5
  public minutos: number = 4
  public moeda: string = '../assets/moeda.png'
  public pontosMinutos: number = 6
 @Output() public encerrarJogo:EventEmitter<string> = new EventEmitter()

  constructor() {
    this.rodadaPerguntas = this.perguntas[this.rodada]
    this.respostaCorreta = this.rodadaPerguntas.respostaCerta
    console.log(this.respostaCorreta)
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 59;
        this.minutos = this.minutos - 1
      }
    },1000)
    this.interval = setInterval(() => {
      if(this.timeLeft == 0 && this.minutos == 0) {
        this.minutos = 4
   this.timeLeft = 59
    this.rodada++
    this.progresso = this.progresso + 5
    this.rodadaPerguntas = this.perguntas[this.rodada]
  this.tentativas--
  }

    },1000)

}
  ngOnInit(): void {
  }
  public primeiraAlternativa(): void{
    if(this.rodada > 19){
      this.encerrarJogo.emit('Vitoria: Você conseguiu '+this.pontuacao+' pontos')
   }
    this.respostaCorreta = this.rodadaPerguntas.respostaCerta
    var alternativa1 = this.rodadaPerguntas.resposta[0]
    
    if(this.respostaCorreta == alternativa1){
      alert('Acertou mizerave')
      this.tempoPonto = this.tempoPonto + (this.timeLeft / 10)
      this.pontuacao = this.pontuacao + this.tempoPonto
      this.pontosMinutos = this.pontosMinutos * this.minutos
      this.pontuacao = this.pontuacao + this.pontosMinutos
      this.pontuacao= this.pontuacao + 100
      Math.round(this.pontuacao)
    }else{
      alert('Errou mizerave')
      this.tentativas--
      if(this.tentativas == -1){
        this.encerrarJogo.emit('Derrota Fracassado')
      }
    }
   this.pontosMinutos = 6
   this.tempoPonto = 0
   this.minutos = 4
   this.timeLeft = 59
    this.rodada++
    this.progresso = this.progresso + 5
    this.rodadaPerguntas = this.perguntas[this.rodada]}
    public segundaAlternativa(): void{
      if(this.rodada > 19){
        this.encerrarJogo.emit('Vitoria: Você conseguiu '+this.pontuacao+' pontos')
     }
    this.respostaCorreta = this.rodadaPerguntas.respostaCerta
    var alternativa2 = this.rodadaPerguntas.resposta[1]
    
    if(this.respostaCorreta == alternativa2){
      alert('Acertou mizerave')
      this.tempoPonto = this.tempoPonto + (this.timeLeft / 10)
      this.pontosMinutos = this.pontosMinutos * this.minutos
      this.pontuacao = this.pontuacao + this.pontosMinutos 
      this.pontuacao = this.pontuacao + this.tempoPonto
      this.pontuacao = this.pontuacao + 100 
      Math.round(this.pontuacao)
    }else{
      alert('Errou mizerave')
      this.tentativas--
      if(this.tentativas === -1){
          this.encerrarJogo.emit('Derrota Fracassado')
      }
    }
    
   this.tempoPonto = 0
   this.pontosMinutos = 6
   this.minutos = 4
   this.timeLeft = 59
    this.rodada++
    this.progresso = this.progresso + 5
    this.rodadaPerguntas = this.perguntas[this.rodada]}
  public terceiraAlternativa(): void{
    this.respostaCorreta = this.rodadaPerguntas.respostaCerta
    var alternativa3 = this.rodadaPerguntas.resposta[2]
    
    if(this.respostaCorreta == alternativa3){
      if(this.rodada > 19){
        this.encerrarJogo.emit('Vitoria: Você conseguiu '+this.pontuacao+' pontos')
     }
      alert('Acertou mizerave')
      this.tempoPonto = this.tempoPonto + (this.timeLeft / 10)
      this.pontosMinutos = this.pontosMinutos * this.minutos
      this.pontuacao = this.pontuacao + this.pontosMinutos
      this.pontuacao = this.pontuacao + this.tempoPonto
      this.pontuacao = this.pontuacao + 100
      Math.round(this.pontuacao)
    }else{
      this.tentativas--
      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota Fracassado')
      }
      alert('Errou mizerave')
    }
    
    this.tempoPonto = 0
    this.pontosMinutos = 6
    this.minutos = 4
    this.timeLeft = 59
    this.progresso = this.progresso + 5
    this.rodadaPerguntas = this.perguntas[this.rodada]
  }
  public quartaAlternativa(): void{
    if(this.rodada > 19){
      this.encerrarJogo.emit('Vitoria: Você conseguiu '+this.pontuacao+' pontos')
   }
    this.respostaCorreta = this.rodadaPerguntas.respostaCerta
    var alternativa4 = this.rodadaPerguntas.resposta[3]
    
    if(this.respostaCorreta == alternativa4){
      alert('Acertou mizerave')
      this.tempoPonto = this.tempoPonto + (this.timeLeft / 10)
      this.pontuacao = this.pontuacao + this.tempoPonto
      this.pontosMinutos = this.pontosMinutos * this.minutos
      this.pontuacao = this.pontuacao + this.pontosMinutos
      this.pontuacao = this.pontuacao + 100
      Math.round(this.pontuacao)
    }else{
      this.tentativas--
      if(this.tentativas === 0){
        alert("Você morreu X_X")
      }
      alert('Errou mizerave')
    }
    
   this.tempoPonto = 0
   this.pontosMinutos = 6
   this.minutos = 4
   this.rodada++
      this.timeLeft = 59
      this.progresso = this.progresso + 5
      this.rodadaPerguntas = this.perguntas[this.rodada]
  }
}
