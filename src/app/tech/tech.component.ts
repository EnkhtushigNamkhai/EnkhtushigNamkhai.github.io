import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit{

  ngOnInit() {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 1,
      scrollTrigger: {
      trigger: '.background-section',
      start: "-100 90%", 
      end: "bottom bottom",
      toggleActions: "play pause resume reverse",
      scrub: 3,
      }, 
    });
    tl.from("#university", { duration: 1, opacity: 0, scale: 0.5,});
    tl.from("#bootcamp", { opacity: 0, duration: 1, scale: 0.5, });
    tl.from("#work", { opacity: 0, duration: 1, scale: 0.5, });
    tl.from(".tech-background ul", { opacity: 0, duration: 1 , scale: 0.5,});
    tl.from("#interests", { opacity: 0, duration: 1 , scale: 0.5,});
  }
}


