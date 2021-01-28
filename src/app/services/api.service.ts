import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilterCharacter } from '../models/characters.model';
import { IEpisode } from '../models/episodes.model';

const API = {
  server: 'https://rickandmortyapi.com/api'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCharactersList(page: number, filter?: IFilterCharacter) {
    let url = `${API.server}/character/?page=${page}`;

    if (filter) {
      if (filter.name) url += `&name=${filter.name}`;
      if (filter.status) url += `&status=${filter.status}`;
      if (filter.species) url += `&species=${filter.species}`;
      if (filter.gender) url += `&gender=${filter.gender}`;
    }

    return this.http.get(url);
  }

  public getEpisodesFromURL(episodes: string[]): IEpisode[] {
    let list: any = [];

    episodes.forEach((episode: string) => {
      this.http.get(episode).subscribe((data: any) => {
        list.push({
          episode: data.episode,
          id: data.id,
          name: data.name,
          url: data.url
        });
      });
    });

    list.sort((a: any, b: any) => a.id > b.id);

    return list;
  }

  public getEpisodesList(page: number) {
    return this.http.get(`${API.server}/episode?page=${page}`);
  }
}
