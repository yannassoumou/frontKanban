export interface KanbanServiceRes {
  id: number;
  count: number;
  result: Kanban[];
}

export interface Kanban {
  id_tableau?: number;
  name: string;
  section?: Section[];
}

export interface Section {
  id_section: number;
  name_section: string;
  state: boolean;
}

export class Kanban {
  constructor(public name: string, public id_tableau?: number, public section?: Section[]) {
  }
}
