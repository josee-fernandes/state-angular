import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

  categoriasSegundaTela = [];

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      const state = this.router.getCurrentNavigation().extras.state;
      this.categoriasSegundaTela = state.categoriasSel ? state.categoriasSel : [];
    }
  }

  ngOnInit() {
    console.log({segunda: this.categoriasSegundaTela});
  }

}
