import { Component, OnInit, ElementRef , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  slideIndex = 1;
  slideHeader = [
      { src: '../../assets/slideShow/a1.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/a.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/e.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/b1.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/b.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/c1.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/c.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/d1.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/d.jpg', text: 'Caption Text' },
      { src: '../../assets/slideShow/m.jpg', text: 'Caption Text' }
  ];

  constructor( private elem: ElementRef ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
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
