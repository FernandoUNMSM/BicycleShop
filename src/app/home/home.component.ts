import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    
    const headers = this.elem.nativeElement.querySelectorAll(".headers");
    var i = 0;
    setInterval(() => {
      headers[i].style.visibility = "hidden";
      headers[i].style.opacity = "0";

      i = (i + 1) % headers.length;

      headers[i].style.visibility = "visible";
      headers[i].style.opacity = "1";
    }, 4000);
  }

}
