import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bicicletas } from './../interfaces/bicicletas';

@Injectable({
  providedIn: 'root'
})
export class BicicletasService {
  constructor(
    private http: HttpClient
  ) { }

  getAllTasks(){
    const path = 'https://bicicletas-api.herokuapp.com/bicycles/';
    return this.http.get(path);
  }  

  createTask(bicicletas: Bicicletas){
    const path = 'https://bicicletas-api.herokuapp.com/bicycles';
    return this.http.post(path, bicicletas);
  }
  updateTask(bicicletas: Bicicletas){
    const path = `https://bicicletas-api.herokuapp.com/bicycles/${bicicletas._id}`;
    return this.http.put(path, bicicletas);
  }
  deleteTask(id: string) {
    const path = `https://bicicletas-api.herokuapp.com/bicycles/${id}`;
    return this.http.delete(path)
  }
}
