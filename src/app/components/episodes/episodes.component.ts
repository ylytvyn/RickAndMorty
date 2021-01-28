import { Component, OnInit } from '@angular/core';
import { IEpisode } from '../../models/episodes.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  public episodes: IEpisode[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  public getEpisodes(): void {
    let page = 1;

    this.apiService.getEpisodesList(page).subscribe((list: any) => {
      list.results.forEach((data: IEpisode) => {
        this.episodes.push(data);
      });

      while (page < list.info.pages) {
        page++;

        this.apiService.getEpisodesList(page).subscribe((res: any) => {
          res.results.forEach((data: IEpisode) => {
            this.episodes.push(data);
          });
        });
      }
      
    });
  }

  public getEpisodeURL(episode: string): string {
    let url: string = 'https://rick-i-morty.online/episodes/',
        season: number = Number(episode.slice(1, 3)),
        seria: number = Number(episode.slice(4, 6));

    return `${url}${season}sez-${seria}seriya110/`;
  }

}
