import { Component, Input, OnInit } from '@angular/core';
import { GenderEnum, IFilterCharacter, SpeciesEnum, StatusEnum } from '../../models/characters.model';

@Component({
  selector: 'filter-characters',
  templateUrl: './filter-characters.component.html',
  styleUrls: ['./filter-characters.component.scss']
})
export class FilterCharactersComponent implements OnInit {
  @Input() criteria: IFilterCharacter = {};

  public statuses: StatusEnum[] = [];
  public speciesList: SpeciesEnum[] = [];
  public genders: GenderEnum[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getFilters();
  }

  private getFilters(): void {
    Object.values(StatusEnum).map(val => {
      this.statuses.push(val);
    });

    Object.values(SpeciesEnum).map(val => {
      this.speciesList.push(val);
    });

    Object.values(GenderEnum).map(val => {
      this.genders.push(val);
    });
  }

}
