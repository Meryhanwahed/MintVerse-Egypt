import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fqs',
  imports: [CommonModule],
  templateUrl: './fqs.html',
  styleUrl: './fqs.css',
})
export class Fqs {
  // متغير لتخزين الفهرس المفتوح حالياً
  activeIndex: number | null = null;

  toggleFAQ(index: number) {
    // إذا ضغط المستخدم على نفس السؤال المفتوح، نقوم بإغلاقه، وإلا نفتح السؤال الجديد
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
