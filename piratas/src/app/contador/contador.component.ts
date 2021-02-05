import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
 export class ContadorComponent {

  public moeda: string = "/assets/moeda certa.png"
  @Input() public pontuacao: number = 0
  }

