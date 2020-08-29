import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public userAll: any;
  public user: any;
  public userState: boolean;
  @ViewChild("menu") menu:ElementRef;
  @ViewChild("userMenu") userMenu:ElementRef;
  @ViewChild("perfil") perfil:ElementRef;
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

    this.userAll = JSON.parse(localStorage.getItem("usuarioActual"));
    
    if(this.userAll == null){
      this.userState = false;
    }
    else {
      this.userState = true;
      this.user = this.userAll.user;
    }
  }
   
  menuCanvasOn(){
    this.menu.nativeElement.classList.add('menuon');
  }
  menuCanvasOff(){
    this.menu.nativeElement.classList.remove('menuon');
  }
  mostrarPerfil(){
    this.perfil.nativeElement.classList.toggle('perfilOn');
    this.menu.nativeElement.classList.remove('menuon');
  }
  cerrarSesion(){
    localStorage.setItem("usuarioActual", null);
    location.reload();
  }
  perfilOff(){

  }
  faBars = faBars;
  faTimes = faTimes;
}
