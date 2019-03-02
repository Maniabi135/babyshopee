import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

// tslint:disable-next-line: max-line-length
  nav_list = ['BRANDS' , 'CLOTHING',  'FOOTWEAR',  'BABY GEAR',  'HOME',  'TOYS',  'OUTLET'];
  constructor() { }

  ngOnInit() {
  }

}
