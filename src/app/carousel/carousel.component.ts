import { Component, OnInit } from '@angular/core';
import { Planta } from '../modelos/planta';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  plantas:Planta[]=[]
  constructor() { 
    this.plantas = [
      {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"es una familia de plantas originarias de América."
    },
    {
      nombre:"Diente de Leon",
      precio:600,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasqPYRUa4SPCbdwYNBZygmHOS9hNPbGxWw0uuiSaIM0SjnvbWWGbwNzd-d94fJyVVbaE&usqp=CAU",
      descripcion:"es una especie de la familia de las asteráceas."
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    }, 
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    }
  ]
  }

  ngOnInit(): void {
  }

}
