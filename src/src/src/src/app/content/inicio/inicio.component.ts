import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  imagenes = [
    '../../../assets/imagenes/imagen1.jpg',
    '../../../assets/imagenes/imagen2.jpg',
    '../../../assets/imagenes/imagen3.jpg'
  ];
  
  imagenes2 = [
    '../../../assets/imagenes/imagen4.jpg',
    '../../../assets/imagenes/imagen5.jpg',
    '../../../assets/imagenes/imagen6.jpg',
    '../../../assets/imagenes/imagen7.jpg',
    '../../../assets/imagenes/imagen8.jpg',
    '../../../assets/imagenes/imagen9.jpg',
    '../../../assets/imagenes/imagen10.jpg',
    '../../../assets/imagenes/imagen11.jpg',

  ];

  imagenes3 = [
    '../../../assets/imagenes/imagen24.jpg',
    '../../../assets/imagenes/imagen25.jpg',
    '../../../assets/imagenes/imagen26.jpg',
    '../../../assets/imagenes/imagen27.jpg',
    '../../../assets/imagenes/imagen28.jpg',
    '../../../assets/imagenes/imagen29.jpg',

  ];
  imagenes4 = [
    '../../../assets/imagenes/imagen30.jpg',
    '../../../assets/imagenes/imagen31.jpg',
    '../../../assets/imagenes/imagen32.jpg',
    '../../../assets/imagenes/imagen33.jpg',
    '../../../assets/imagenes/imagen34.jpg',
    '../../../assets/imagenes/imagen35.jpg',
    '../../../assets/imagenes/imagen36.jpg',
    '../../../assets/imagenes/imagen37.jpg',

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}

