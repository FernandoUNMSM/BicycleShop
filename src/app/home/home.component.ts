import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("menu") menu:ElementRef;
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

    const spans = this.elem.nativeElement.querySelectorAll('.header-info span');
    var j=0;

    if(spans.length >1) {
        setInterval(()=> {
            spans[j].style.display = 'none';
            j = (j+1)%spans.length;
            spans[j].style.display = 'initial'
        },1800);  
    }

    const boton = document.getElementById('button');
    const info = document.getElementById('info-container');
    const caja = document.getElementById('caja');
    const cajaContainer = document.getElementById('caja-container');
    if(boton) {
        boton.addEventListener('click',mapa);
        var n=0;
        
        function mapa() {
            n++;
            info.classList.toggle('info-0');
            caja.classList.toggle('info-0');
            boton.classList.toggle('button-on');
            if(n%2 != 0) { 
                boton.innerHTML="Ver informacion de contacto";
            }
            else {
                boton.innerHTML="Ver ubicacion del mapa";
            }
        }
    }
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        this.menu.nativeElement.classList.add('on');
      }
      else {
        this.menu.nativeElement.classList.remove('on');
      }
    }
  }

}
