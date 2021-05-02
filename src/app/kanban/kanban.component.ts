import {Component, OnInit} from '@angular/core';
import {Kanban} from '../domain/kanban';
import {KanbanService} from '../_service/sections/kanban.service';
import {Section} from '../domain/section';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  nameTbk: string;
  success: boolean;
  searchTableauKanbanName: any;
  listTbk: Kanban[] = [];

  constructor(private kanbanService: KanbanService) {
  }

  ngOnInit(): void {
    this.kanbanService.getKanban().subscribe(data => {
      data.result.forEach((e, index) => {
        this.listTbk.push(new Kanban(e.name, e.id_tableau, e.section));
      });
    });
  }

  createTableauKanban(): void {
    this.kanbanService.setKanban(new Kanban(this.nameTbk)).subscribe(data => {
      this.success = data;
    });
  }
}
