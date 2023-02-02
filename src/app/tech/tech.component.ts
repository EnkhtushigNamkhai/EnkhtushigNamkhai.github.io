import { Component } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {

  constructor(private sanitizer: DomSanitizer) {
  }
}


