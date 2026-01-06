import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-interactive-timeline',
  imports: [CommonModule],
  templateUrl: './interactive-timeline.html',
  styleUrl: './interactive-timeline.css',
})
export class InteractiveTimeline {
  scrollProgress = 0;

  @ViewChild('timelineContainer') timelineContainer!: ElementRef;

  // بيانات الخط الزمني
  timelineEras = [
    { id: 1, year: '3000 ق.م', title: 'المقايضة الفرعونية', description: 'قبل العملات المعدنية، استخدم المصريون الحبوب والمعادن كوزن.', image: 'assets/museum/event2.png', threshold: 10 },
    { id: 2, year: '332 ق.م', title: 'العصر البطلمي', description: 'بداية ظهور العملات اليونانية المضروبة على أرض مصر.', image: 'assets/museum/event1.png', threshold: 30 },
    { id: 3, year: '641 م', title: 'العصر الإسلامي', description: 'ظهور الدينار والدرهم بنقوش عربية فنية.', image: 'assets/museum/1.png', threshold: 50 },
    { id: 4, year: '1834 م', title: 'القرش والبارة', description: 'محمد علي باشا يؤسس النظام النقدي المصري الحديث.', image: 'assets/images/era4.png', threshold: 75 },
    { id: 5, year: '1952 م', title: 'الجمهورية', description: 'تحول العملة لتعكس الهوية الوطنية الحديثة.', image: 'assets/images/era5.png', threshold: 95 }
  ];

  // مراقبة التمرير لتحديث شريط التقدم
  @HostListener('window:scroll')
  updateProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
  }
}
