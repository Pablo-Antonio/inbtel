import { Component, OnInit } from '@angular/core';
import { routes, Page } from '../../../assets/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  title: string = 'Menú principal';
  pages: Page[] = routes;

  constructor() {
  }

  ngOnInit() {
  }

  errorImg(ev){}

  openRecarga(){
    /*const browser = this.iab.create('https://www.instagram.com/wispmx/');
    browser.show();*/
    window.open('https://byplus.io/inbtel');
  }
}
