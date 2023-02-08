import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  imagenes4 = [
    '../../../assets/imagenes/imagen7.jpg',
    '../../../assets/imagenes/imagen13.jpg',
    '../../../assets/imagenes/imagen14.jpg',
    '../../../assets/imagenes/imagen15.jpg',
    '../../../assets/imagenes/imagen16.jpg',
    '../../../assets/imagenes/imagen17.jpg',

  ];

  imagenes5 = [
    '../../../assets/imagenes/imagen5.jpg',
    '../../../assets/imagenes/imagen9.jpg',
    '../../../assets/imagenes/imagen12.jpg',
    '../../../assets/imagenes/imagen13.jpg',
    '../../../assets/imagenes/imagen17.jpg',

  ];

  imagenes6 = [
    '../../../assets/imagenes/imagen11.jpg',
    '../../../assets/imagenes/imagen21.jpg',
    '../../../assets/imagenes/imagen22.jpg',
    '../../../assets/imagenes/imagen23.jpg',

  ];
  
  imagenes7 = [
    '../../../assets/imagenes/imagen18.jpg',
    '../../../assets/imagenes/imagen19.jpg',
    '../../../assets/imagenes/imagen20.jpg',
    '../../../assets/imagenes/imagen38.jpg',
    '../../../assets/imagenes/imagen39.jpg',
    '../../../assets/imagenes/imagen40.jpg',
    
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
