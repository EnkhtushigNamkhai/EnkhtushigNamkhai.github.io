import { Component, OnInit, AfterViewInit } from '@angular/core';

interface Painting {
  id: string;
  src: string;
  videoSrc: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements AfterViewInit {
  paintings: Painting[];
  displayedVideoId = "flight";

  ngAfterViewInit() {
    document.querySelector('#' + this.displayedVideoId)!.classList.add('displayVideo');
  }

  showVideo(painting: Painting) {
    if (painting.id !== this.displayedVideoId) {
      document.querySelector('#' + this.displayedVideoId)!.classList.toggle('displayVideo');

      const videoElemToDisplay: Element = document.querySelector('#' + painting.id)!;
      videoElemToDisplay.classList.toggle('displayVideo');
      this.displayedVideoId = painting.id;
    }
  }

  constructor() {
    this.paintings = [{
      id: 'flight',
      src: '../../assets/flight.png',
      videoSrc: '../../assets/flight.mp4',
      title: 'The Flight: ',
      description: `Oil painting on a 40\"x30\" canvas panel. 
      This painting came about from a feeling I felt inside. During a difficult time in my life,
      I could always observe animals and be in awe of how strong and magestic they are. They do not complain,
      they survive, they fly and they soar. Sometimes they may fall, but they always strive, and I've always
      found that to be fascinating when I was a little girl. My love for eagles and what they represent,
      drove me to create this painting. I didn't have a clear image before I started, but I knew what I
      wanted it to feel like when someone looked at it. I wanted its wings to span a wider range, I wanted 
      it to look just as magestic as the real one.`
    },
    {
      id: 'float',
      src: '../../assets/float.png',
      videoSrc: '../../assets/float.mp4',
      title: 'Floating Through Time and Space: ',
      description: ` Oil painting on a 30"x30" canvas. Inspired by the magical movement of 
      jellyfish making their way through the waters. These creatures are never still, they are always in constant motion, which made me 
      think about how time is always moving as well, and how the spaces around us are affected by the inhabitants. Sometimes, it's ok to just 
      calmly float through life, we don't always have to go against the current. These creatures truly mezmerized me, and I wanted to capture this feeling.
`,
    },
    {
      id: 'hope',
      src: '../../assets/hope.png',
      videoSrc: '../../assets/hope.mp4',
      title: 'The Field of Hope: ',
      description: `Oil painting on a 18"x24" canvas panel.`
    },
    {
      id: 'grace',
      src: '../../assets/grace.png',
      videoSrc: '../../assets/hope.mp4',
      title: 'Into Grace',
      description: `Oil painting on a 18"x24" canvas panel.`
    },
    ];
  }

}

