import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public listProductos:any[]=
  [
    {
      nombre:'Arenera jumbo',
      precio: 2000,
      imagen1: '../../assets/img/Arenera Jumbo.jpg'
    },
    {
      nombre:'Alfombra antideslizante',
      precio: 10000,
      imagen1: '../../assets/img/alfombra antideslizante.PNG'
    },
    {
      nombre:'Bebedero Portatil',
      precio: 15000,
      imagen1: '../../assets/img/bebedero portatil.jpg'
    },
    {
      nombre:'Alfombra mediana',
      precio: 10000,
      imagen1: '../../assets/img/Arenera mediana.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
