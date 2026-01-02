import { Component } from '@angular/core';
import { Map } from './map/map';
import { Fqs } from './fqs/fqs';
import { ContactForm } from './contact-form/contact-form';
import { ContactInfo } from './contact-info/contact-info';
@Component({
  selector: 'app-contact-us',
  imports: [Map,Fqs,ContactForm,ContactInfo],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {

}
