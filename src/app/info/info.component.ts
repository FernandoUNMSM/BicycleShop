import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  public biciActual: any;

  public bicisCarrito: Array<JSON>;
  @ViewChild(MenuComponent, {static:true}) MenuComponent: MenuComponent;
  constructor(
    private _router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.biciActual = JSON.parse(localStorage.getItem("biciActual")).bicycle;
    // console.log(this.biciActual)
    if("bicisCarrito" in localStorage){
      this.bicisCarrito = [...JSON.parse(localStorage.getItem("bicisCarrito"))];
    }else{
      this.bicisCarrito = [];
    }
    console.log(this.bicisCarrito);
  }
  anadirCarrito(id: string){
    this.bicisCarrito.push(this.biciActual);
    localStorage.setItem("bicisCarrito", JSON.stringify(this.bicisCarrito));
    this.MenuComponent.ngOnInit();
  }
}
