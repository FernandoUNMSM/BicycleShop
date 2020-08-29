import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
}
