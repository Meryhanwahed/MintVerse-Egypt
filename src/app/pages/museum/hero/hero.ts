import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // التعديل هنا: نزيل الـ $event لأننا لا نستخدمه فعلياً في منطق الحساب
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollValue = window.scrollY;
    const bg = this.el.nativeElement.querySelector('.parallax-bg');

    if (bg) {
      // استخدام Renderer2 هو الطريقة الأكثر أماناً في أنجولار للتعامل مع الـ DOM
      this.renderer.setStyle(bg, 'transform', `translateY(${scrollValue * 0.5}px)`);
    }
  }
}
