import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';import { Hero } from './hero/hero';
import { Coinfilter } from './coinfilter/coinfilter';
import { Coinlist } from './coinlist/coinlist';
import { Coindetails } from './coindetails/coindetails';
import { InteractiveTimeline } from './interactive-timeline/interactive-timeline';
@Component({
  selector: 'app-museum',
  imports: [Hero,Coinfilter,Coinlist,Coindetails,InteractiveTimeline,CommonModule],
  templateUrl: './museum.html',
  styleUrl: './museum.css',
})
export class Museum {
  currentFilters: any = { era: 'all', metal: 'all' };
  selectedCoin: any = null;

  // تحديث الفلاتر عند تغييرها من كومبوننت الفلترة
  onFilterChange(filters: any) {
    this.currentFilters = filters;
    console.log('Filters updated:', this.currentFilters);
  }

  // فتح تفاصيل العملة عند النقر عليها في الـ Grid
  openCoinDetails(coin: any) {
    this.selectedCoin = coin;
    document.body.style.overflow = 'hidden'; // منع السكرول في الخلفية
  }

  // إغلاق نافذة التفاصيل
  closeDetails() {
    this.selectedCoin = null;
    document.body.style.overflow = 'auto'; // إعادة السكرول
  }
}
