import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import SplitType from 'split-type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    console.log('apparently here is empty now? ' + ScrollTrigger.getAll().length);
    const myText = new SplitType("#my-text");
     gsap.registerPlugin(ScrollTrigger);
     this.animateName();
     this.animateBackground();
   
  }

  animateName() {
    gsap.to('.char', {
      y: (window.innerHeight * .70) + 500,
      stagger: 0.1,
      delay: 0.3,
      duration: 0.3,
      ease: 'elastic',
    });
  }

  animateBackground() {
    gsap.from('.asset-container', {
      opacity: 0,
      duration: 2,
    });

    var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    tl.from("#rest", { x: -200, duration: 1, opacity: 0, });
    tl.from("#flowers", { opacity: 0, scale: 2, duration: 1 });
    tl.from("#scribbles", { opacity: 0, duration: 1 });
  }
}

