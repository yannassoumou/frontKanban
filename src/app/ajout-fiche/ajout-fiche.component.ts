import { Component, OnInit } from '@angular/core';
import {Fiche} from '../domain/fiches';

@Component({
  selector: 'app-ajout-fiche',
  templateUrl: './ajout-fiche.component.html',
  styleUrls: ['./ajout-fiche.component.css']
})
export class AjoutFicheComponent implements OnInit {
  fiche: Fiche;

  constructor() { }

  ngOnInit(): void {
  }

}
