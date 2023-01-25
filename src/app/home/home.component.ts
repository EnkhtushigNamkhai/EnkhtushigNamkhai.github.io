import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy  {
  // if the img intersects with the viewport, 
  // and the existing width is 80%:  I want to set the height to be 80% and width auto. 
  // if the existing width is something else: I want to sent the width to be 80% and height auto 

  targetElem : Element| null = null;
  observer : IntersectionObserver|null = null;

  constructor() {}

   ngAfterViewInit() {
    let options = {
      root: document.querySelector(".background"), //defaults to Viewport 
      rootMargin: '0px',
      threshold: 1.0
    }
    
    this.observer = new IntersectionObserver(this.callback, options); 
    this.targetElem = document.querySelector("#image")!;
    this.observer.observe(this.targetElem);
   }
   
   ngOnDestroy() {
     this.observer!.disconnect();
   }

  callback(entries: any) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) {
        // transition-property: font-size;
        // transition-duration: 4s;
        // transition-delay: 2s;
        if (entry.target.getAttribute('width') === '80%') {
          entry.target.classList.toggle('transitionHeight');
        } else {
          entry.target.classList.toggle('transitionWidth');
        }
      }
    
    });
    
    // entries.forEach((entry: IntersectionObserverEntry) => {
    //   console.log(entry);
    //   // Each entry describes an intersection change for one observed
    //   // target element:
    //   //   entry.boundingClientRect
    //   //   entry.intersectionRatio
    //   //   entry.intersectionRect
    //   //   entry.isIntersecting
    //   //   entry.rootBounds
    //   //   entry.target
    //   //   entry.time
    // });
  }  
}
