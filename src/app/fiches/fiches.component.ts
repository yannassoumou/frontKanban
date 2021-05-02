import {Component, OnInit} from '@angular/core';
import {FichesService} from '../_service/fiches/fiches.service';
import {Fiche} from '../domain/fiches';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css'],
  providers: [FichesService]
})
export class FichesComponent implements OnInit {

  listeFiche: any;

  constructor(private fichesService: FichesService) {}

  ngOnInit(): void {
    // , 'ehuie@hotmail.fr'
    this.fichesService.getFicheBySectionId('2').subscribe((data) => {
      this.listeFiche = data;
    });
  }

}
