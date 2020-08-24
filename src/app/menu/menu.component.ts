import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild("menu") menu:ElementRef;
  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        this.menu.nativeElement.classList.add('on');
      }
      else {
        this.menu.nativeElement.classList.remove('on');
      }
    }
  }
  menuCanvasOn(){
    this.menu.nativeElement.classList.add('menuon');
  }
  menuCanvasOff(){
    this.menu.nativeElement.classList.remove('menuon');
  }


  faBars = faBars;
  faTimes = faTimes;
}
