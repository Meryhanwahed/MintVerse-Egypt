import { Component } from '@angular/core';
import { AboutHero } from './about-hero/about-hero';
import { CoinJourne } from './coin-journe/coin-journe';
import { Facts } from './facts/facts';
import { Intro } from './intro/intro';
import { Pillars } from './pillars/pillars';
import { Security } from './security/security';
import { Vision } from './vision/vision';
@Component({
  selector: 'app-about',
  imports: [Vision,Security,Pillars,Intro,Facts,CoinJourne,AboutHero],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
