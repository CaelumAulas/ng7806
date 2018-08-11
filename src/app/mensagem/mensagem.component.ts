import { Component, OnInit, Input } from '@angular/core';
import { Mensagem } from './mensagem';

@Component({
  selector: 'caelumpic-mensagem',
  template: `<p class="alert alert-{{tipo}}" role="alert">{{texto}}</p>`,
  styles: []
})
export class MensagemComponent implements OnInit {

  @Input() tipo = 'primary'
  @Input() texto = ''

  constructor() { }

  ngOnInit() {
  }

}
