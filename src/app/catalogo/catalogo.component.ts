import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { BicicletasService } from '../services/bicicletas.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public bicicletasArray: any;
  public bicicletasMontaneras: any;
  public bicicletasVintage: any;
  public bicicletasDeportivas: any;
  public bicicletasElectricas: any;
  public bicicletasActual: any;
  constructor(
    private bicicletasService: BicicletasService
  ) { }

  ngOnInit(): void {
    // this.window.pageYOffset = 0;
    this.getAllTasks();
    // this.createTask();
    // this.deleteTask();
  }
  getAllTasks() {
    this.bicicletasService.getAllTasks()
      .subscribe(bicicletas => {
        var bicis = JSON.stringify(bicicletas);
        var usuarioArrayJson = JSON.parse(bicis);
        this.bicicletasArray = usuarioArrayJson.bicycles;

        this.bicicletasMontaneras = this.bicicletasArray.filter(element => element.tipo == "Montañera");
        this.bicicletasVintage = this.bicicletasArray.filter(element => element.tipo == "Vintage");
        this.bicicletasDeportivas = this.bicicletasArray.filter(element => element.tipo == "Deportiva");
        this.bicicletasElectricas = this.bicicletasArray.filter(element => element.tipo == "Electrica");

        this.bicicletasActual = this.bicicletasMontaneras;
      });
  }
  array(tipe: string) {
    switch (tipe) {
      case "Montaneras": console.log("Montañera"); this.bicicletasActual = this.bicicletasMontaneras; break;
      case "Vintage": console.log("Vintage"); this.bicicletasActual = this.bicicletasVintage; break;
      case "Deportivas": console.log("Deportiva"); this.bicicletasActual = this.bicicletasMontaneras; break;
      case "Electricas": console.log("Electrica"); this.bicicletasActual = this.bicicletasElectricas; break;
    }
  }

  createTask() {
    const bicicleta = {
      especificaciones: ["Tipo de freno contrapedal","Tamaño del bastidor 18 centimetros","Material Acero"],
      marca: "Benotto",
      aro: "26",
      nombre: "Ignition FS MTB",
      tipo: "Vintage",
      imagenURL: "./../assets/img/bicicletaVintage7.png",
    }
    this.bicicletasService.createTask(bicicleta)
      .subscribe((newBicleta) => {
        console.log(newBicleta);
      })
  }
  deleteTask() {
    this.bicicletasService.deleteTask('5f49792c5799b900173e0e3e')
      .subscribe((data) => {
        console.log(data);
      })
  }

  updateTask() {
    const bicicleta = {
      _id: '5f4438783a7b210017f21560',
      especificaciones: ["Piñon de 12 velocidades", "Frenos de tambor", "Cuerpo de acero inoxidable"],
      marca: "RUSH",
      aro: "27",
      nombre: "RUSH xm4 Xtreme ",
      tipo: "Montañera",
      imagenURL: "./../assets/img/bicicleta4.png",
    }
    this.bicicletasService.updateTask(bicicleta)
      .subscribe((newBicleta) => {
        console.log(newBicleta);
      })
  }
}
