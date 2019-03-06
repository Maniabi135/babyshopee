import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  slideIndex = 1;
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
  constructor( private elem: ElementRef ) { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let slides = this.elem.nativeElement.querySelectorAll('.ms_mySlides');
    let dots = this.elem.nativeElement.querySelectorAll('.ms_dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    dots.forEach(dot =>{
      dot.className = dot.className.replace('active', '');
    });

    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }

}
