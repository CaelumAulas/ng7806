import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'caelumpic-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input('foto') fotoObjeto

  constructor() { }

  ngOnInit() {
  }

}
