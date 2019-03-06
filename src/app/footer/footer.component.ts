import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  categoryLinkList =  [
    {
       title: 'CUSTOMER SERVICE',
       category: ['Privacy Policy', 'Terms and Conditions', 'Shipping Policy', 'Return & Exchange Policy'],
       path: ['/dashboard']
    },
    {
      title: 'INFORMATIONS',
      category: ['About Us', 'Store Outlets', 'Contact Us'],
      path: ['/dashboard']
    }
  ];

  socialContactIcon = ['fa fa-facebook-square', 'fa fa-instagram', 'fa fa-whatsapp'];

  paymentLogo = ['../../assets/payment/mastercard.png', '../../assets/payment/visa.png', '../../assets/payment/paypal.png'];

  constructor() {
  }

  ngOnInit() {
  }

}
