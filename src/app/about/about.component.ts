import { AfterViewInit, Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit, OnDestroy {

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.text-container', {
      scrollTrigger: {
        trigger: '.text-container',
        scrub: true,
        start: "-100 90%", 
        end: "bottom 80%",
        // toggleActions: "play pause resume reverse",
       
      },
      // opacity: 0,
      scale: 0.75,
    }); 

    gsap.from("#leaves path", {
      scrollTrigger: {
        scrub: true,
        start: `${window.innerHeight/2 + 50} 50%`, 
        end: `${window.innerHeight * 1.5} 50%`,
      },
      stagger: 0.1,
      opacity: 0,
    });
    
     
  }
}

