import { Component, OnInit } from '@angular/core';
import { Hero} from '../Hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heros';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  selectedHero: Hero;
  heroes: Hero[];
  getHeroes(): void{
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
    this.messageService.addMessage('HeroService: fetched heroes');
  }

  OnSelected(hero: Hero): void
  {
    this.selectedHero = hero;
    this.messageService.addMessage(`HeroesComponent: Selected hero id=${hero.id}`);

  }

  ngOnInit(): void {
  }

}
