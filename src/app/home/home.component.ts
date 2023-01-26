import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy  {
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
        if (entry.target.getAttribute('width') === '80%') {
          entry.target.classList.toggle('transitionHeight');
        } else {
          entry.target.classList.toggle('transitionWidth');
        }
      }
    });
    
  }  
}
