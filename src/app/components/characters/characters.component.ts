import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICharacter, IFilterCharacter, StatusEnum } from '../../models/characters.model';
import { LoadingService } from '../../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { EpisodesWindowComponent } from '../episodes-window/episodes-window.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../alert/alert.component';



@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[] = [];
  public statusEnum = StatusEnum;
  public listLength: number = 0;
  public itemsPerPage: number = 20;
  public loading: boolean = false;

  public searchCriteria: IFilterCharacter = {};

  constructor(private apiService: ApiService,
              private loadingService: LoadingService,
              private dialog: MatDialog,
              private alert: MatSnackBar) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }

  public getCharacters(page: number, filter?: IFilterCharacter): void {
    this.loading = this.loadingService.start();

    this.apiService.getCharactersList(page, filter).subscribe((characters: any) => {
      this.characters = characters.results;
      this.listLength = characters.info.count;

      setTimeout(() => {
        this.loading = this.loadingService.stop();
      }, 500);
      
    }, 
    error => {
      this.alert.openFromComponent(AlertComponent, {
        duration: 5000,
        horizontalPosition: 'end',
        data: error
      });

      this.characters = [];
      this.listLength = 0;
      setTimeout(() => {
        this.loading = this.loadingService.stop();
      }, 500);
    });
  }

  public showEpisodes(episodes: string[]) {
    this.dialog.open(EpisodesWindowComponent, {
      width: '500px',
      data: episodes
    });
  }

}
