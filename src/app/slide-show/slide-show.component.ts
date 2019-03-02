import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  slideImg = [
  '../../assets/slideShow/a1.jpg',
  '../../assets/slideShow/a.jpg',
  '../../assets/slideShow/e.jpg',
  '../../assets/slideShow/b1.jpg',
  '../../assets/slideShow/b.jpg',
  '../../assets/slideShow/c1.jpg',
  '../../assets/slideShow/c.jpg',
  '../../assets/slideShow/d1.jpg',
  '../../assets/slideShow/d.jpg',
  '../../assets/slideShow/m.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
