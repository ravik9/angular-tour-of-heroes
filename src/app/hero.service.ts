import { Injectable, OnInit } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heros';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]>
  {
    return of(HEROES);
  }
  constructor() { }
  // tslint:disable-next-line:contextual-lifecycle
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getHeroes();
  }
}
