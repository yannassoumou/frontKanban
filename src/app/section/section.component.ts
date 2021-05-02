import {Component, OnInit} from '@angular/core';
import {Section} from '../domain/section';
import {SectionService} from '../_service/sections/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  nameSection: string;
  listSection: Section[] = [];
  success: boolean;
  searchSectionName = '';

  constructor(private sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.sectionService.getSection().subscribe((data) => {
      data.result.forEach((e, index) => {
        this.listSection.push(new Section(e.name_section, e.state, e.id_section));
      });
    });
  }

  createSection(): void {
    if (this.nameSection !== '') {
      let section = new Section(this.nameSection, true);
      this.sectionService.setSection(section).subscribe(data => {
        // this.reloadPage();
        this.success = data;
      });
    }
  }

  // addSectionTotbk();

  reloadPage(): void {
    window.location.reload();
  }
}
