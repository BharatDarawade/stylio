import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent implements OnInit {

  constructor() { }
  images = ['../assets/master-slide-01.jpg','../assets/master-slide-03.jpg','../assets/master-slide-04.jpg','../assets/master-slide-05.jpg','../assets/master-slide-06.jpg','../assets/master-slide-07.jpg'];

  ngOnInit() {
  }

}
