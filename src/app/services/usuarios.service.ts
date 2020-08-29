import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuarios } from './../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }


  createUser(user: Usuarios){
    const path = 'https://bicicletas-api.herokuapp.com/register';
    return this.http.post(path, user);
  }

  getUser(user: Usuarios){
    const path2 = 'https://bicicletas-api.herokuapp.com/login';
    return this.http.post(path2, user);
  }
}
