import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos'; // تأكدي من أن هذا الاستيراد يعمل بعد التثبيت

@Component({
  selector: 'app-mint',
  standalone: true, // تأكدي من هذا إذا كان مشروعك Angular 17+
  imports: [CommonModule],
  templateUrl: './mint.html', // تأكدي من اسم الملف هنا
  styleUrls: ['./mint.css']  // تأكدي من اسم الملف هنا
})
export class Mint implements OnInit, AfterViewInit {

  // يمكنكِ إضافة هذه المتغيرات إذا كنتِ تخططين لـ Lightbox للخرائط
  isLightboxOpen: boolean = false;
  currentLightboxImage: string = '';

  constructor() {}

  ngOnInit(): void {
    // أي عمليات جلب بيانات من API توضع هنا
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200, // زيادة المدة قليلاً لإعطاء إحساس بالفخامة
      once: true,
      mirror: false
    });
  }

  // دالة لفتح الـ Lightbox (إذا أردتِ تطبيقها)
  openLightbox(imageSrc: string): void {
    this.currentLightboxImage = `assets/images/${imageSrc}`;
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden'; // لمنع التمرير عند فتح اللايت بوكس
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    this.currentLightboxImage = '';
    document.body.style.overflow = 'auto'; // إعادة التمرير
  }

  // دالة اختيارية لزر "تحميل الوثيقة" إذا قررتِ استخدامه
  downloadPDF(): void {
    const link = document.createElement('a');
    link.href = 'assets/documents/sample-document.pdf'; // تأكدي من المسار الصحيح
    link.download = 'وثيقة_الضربخانة.pdf';
    link.click();
  }
}
