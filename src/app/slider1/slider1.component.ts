import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.scss']
})
export class Slider1Component {

  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/thumbnails/thumb1.png'},
      { name: 'assets/images/thumbnails/thumb2.png'},
      { name: 'assets/images/thumbnails/thumb3.png'}
    ];
  }

}
