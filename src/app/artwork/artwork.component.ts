import { Component } from '@angular/core';


@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent {
  slides: any[];

  constructor() { 
    this.slides = [{
      id: 0,
      src: '../../assets/flight.png',
      title: 'Flight',
      subtitle: 'Soaring Through the Sky'
    },
    {
      id: 1,
      src: '../../assets/float.png',
      title: 'Floating Through Time and Space',
      subtitle: 'Inspired by the way jellyfish magically move around, like creatures from another world.'
    },
  
    {
      id: 2,
      src: '../../assets/hope.png',
      title: 'The Field of Hope',
      subtitle: ' (ref:)'
    },
    {
      id: 3,
      src: '../../assets/grace.png',
      title: 'Into Grace',
      subtitle: 'Loved painting her, (ref: )'
    },
  ];
  }

}

