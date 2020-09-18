import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public userAll: any;
  public user: any;
  public userState: boolean;
  public bicisCarrito: Array<JSON>
  @ViewChild("menu") menu:ElementRef;
  @ViewChild("userMenu") userMenu:ElementRef;
  @ViewChild("perfil") perfil:ElementRef;
  @ViewChild("carrito") carrito:ElementRef;
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
    if("bicisCarrito" in localStorage){
      this.bicisCarrito = [...JSON.parse(localStorage.getItem("bicisCarrito"))];
    }else{
      this.bicisCarrito = [];
    }
    console.log(this.bicisCarrito)
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
    this.carrito.nativeElement.classList.remove('carritoOn');
  }
  mostrarCarrito(){
    this.carrito.nativeElement.classList.toggle('carritoOn');

    this.menu.nativeElement.classList.remove('menuon');
    this.perfil.nativeElement.classList.remove('perfilOn');
  }
  cerrarSesion(){
    localStorage.setItem("usuarioActual", null);
    location.reload();
  }
  faBars = faBars;
  faTimes = faTimes;
  faShoppingCart = faShoppingCart;
}
