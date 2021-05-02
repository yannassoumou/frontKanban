export interface SectionServiceRes {
  id: number;
  count: number;
  result: Section[];
}

export interface Section {
  id_section?: number;
  name_section: string;
  state: boolean;
}

export class Section {
  constructor(public name_section: string, public state: boolean, public id_section?: number) {
  }


}
