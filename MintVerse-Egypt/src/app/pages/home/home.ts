import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Importances } from './importances/importances';
import { Parteners } from './parteners/parteners';
import { Timeline } from './timeline/timeline';
@Component({
  selector: 'app-home',
  imports: [Hero,Importances,Parteners,Timeline],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
