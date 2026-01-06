import { Component } from '@angular/core';
import { Identity } from './identity/identity';
import { Production } from './production/production';
import { Infographic } from './infographic/infographic';
import { MuseumIntegration } from './museum-integration/museum-integration';
@Component({
  selector: 'app-mint',
  imports: [MuseumIntegration,Infographic,Production,Identity],
  templateUrl: './mint.html',
  styleUrl: './mint.css',
})
export class Mint {

}
