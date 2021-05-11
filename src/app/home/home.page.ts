import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias = [
    {id: 1, name: 'Categoria 1'},
    {id: 2, name: 'Categoria 2'},
    {id: 3, name: 'Categoria 3'},
    {id: 4, name: 'Categoria 4'},
    {id: 5, name: 'Categoria 5'},
  ];

  categoriasSelecionadas = [];

  constructor(private router: Router){}

  clicou = (id: number) => {
    console.log(id);

    const categoriasCopy = this.categorias.filter(categoria => {
      if(categoria.id === id) {return categoria;}
    });

    const usuario = {
      nome: 'jose',
      idade: 19
    };

    const copiaUsuario = { ...usuario, idade: 20 };

    this.categoriasSelecionadas = [...this.categoriasSelecionadas, ...categoriasCopy];
  };

  mostrarSelecionadas = () => {
    console.log({primeira: this.categoriasSelecionadas});
  };

  passarPraSegundaTela = () => {
    this.router.navigate(['/segunda'], {
      state: {
        categoriasSel: this.categoriasSelecionadas
      }
    });
  };

}
