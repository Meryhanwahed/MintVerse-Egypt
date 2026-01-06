import { Component ,Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

interface Coin {
  id: number;
  name: string;
  date: string;
  mintYear: string;
  material: string;
  metalColor: string;
  image: string;
  era: string;
}
@Component({
  selector: 'app-coinlist',
  imports: [CommonModule, RouterLink],
  templateUrl: './coinlist.html',
  styleUrl: './coinlist.css',
})
export class Coinlist {


  // أضيفي هذا السطر لاستقبال الفلاتر من الأب
  @Input() activeFilters: any = { era: 'all', metal: 'all' };

  // أضيفي هذا السطر لإرسال العملة المختارة للأب
  @Output() coinSelected = new EventEmitter<any>();
  coins: Coin[] = [
    {
      id: 1,
      name: 'ريال السلطان فؤاد الأول',
      date: '١٩٢٠ م - ١٣٣٨ هـ',
      mintYear: '1920',
      material: 'فضة',
      metalColor: '#C0C0C0',
      image: 'assets/museum/1.png', // استبدليها بمسار صورك
      era: 'royal'
    },
    {
      id: 2,
      name: '١٠٠ جنيه الملك فاروق (ذهب)',
      date: '١٩٣٨ م - ١٣٥٧ هـ',
      mintYear: '1938',
      material: 'ذهب خالص',
      metalColor: '#D4AF37',
      image: 'assets/museum/2.png',
      era: 'royal'
    },
    {
      id: 3,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/3.png',
      era: 'islamic'
    },{
      id: 4,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/4.png',
      era: 'islamic'
    },{
      id: 5,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/5.png',
      era: 'islamic'
    },{
      id: 6,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/7.png',
      era: 'islamic'
    },{
      id: 8,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/8.png',
      era: 'islamic'
    },{
      id: 9,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/9.png',
      era: 'islamic'
    },{
      id: 10,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/10.png',
      era: 'islamic'
    },{
      id: 11,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/11.png',
      era: 'islamic'
    },{
      id: 12,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/12.png',
      era: 'islamic'
    },{
      id: 13,
      name: 'دينار عبد الملك بن مروان',
      date: '٧٧ هـ',
      mintYear: '77 AH',
      material: 'ذهب',
      metalColor: '#D4AF37',
      image: 'assets/museum/13.png',
      era: 'islamic'
    },
  ];

  get filteredCoins() {
    return this.coins.filter(coin => {
      const eraMatch = this.activeFilters.era === 'all' || coin.era === this.activeFilters.era;
      const metalMatch = this.activeFilters.metal === 'all' || coin.material === this.activeFilters.metal;
      return eraMatch && metalMatch;
    });
  }

  onCoinClick(coin: any) {
    this.coinSelected.emit(coin);
  }
}
