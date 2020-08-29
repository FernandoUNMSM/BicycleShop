import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("login") login:ElementRef;
  @ViewChild("registro") registro:ElementRef;
  @ViewChild("line") line:ElementRef;

  public nombre: string;
  public email: string;
  public contrasena: string;
  public dni: string;

  public emailL: string;
  public contrasenaL: string;

  constructor(
    private elem: ElementRef, 
    private UsuariosService: UsuariosService,
    private _router: Router) { 
  }

  ngOnInit(): void {
  }

  abrirRegistro(){
    this.registro.nativeElement.classList.add('registroActive');
    this.login.nativeElement.classList.add('loginOff');
    this.line.nativeElement.classList.add('lineActive');
  }

  abrirLogin(){
    this.registro.nativeElement.classList.remove('registroActive');
    this.registro.nativeElement.style.height=""
    this.login.nativeElement.classList.remove('loginOff');
    this.line.nativeElement.classList.remove('lineActive');
  }
  createUser(){
    const user = {
      name: this.nombre,
      email: this.email,
      password: this.contrasena,
      dni: this.dni
    }
    this.UsuariosService.createUser(user)
    .subscribe((newUser)=>{
      let usuarioArray = JSON.stringify(newUser);
      localStorage.setItem("usuarioActual", usuarioArray);
      this._router.navigate(['/home']);
    })
  }
  getUser(){
    const user = {
      email: this.emailL,
      password: this.contrasenaL
    }
    this.UsuariosService.getUser(user)
    .subscribe((newUser)=>{
      var usuarioArray = JSON.stringify(newUser);
      localStorage.setItem("usuarioActual", usuarioArray);
      this._router.navigate(['/home']);
    })

  }
}
