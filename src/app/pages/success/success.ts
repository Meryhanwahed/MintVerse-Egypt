import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-success',
  imports: [CommonModule],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success implements OnInit, OnDestroy {
  countdown: number = 7; // عدد الثواني قبل العودة
  timer: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // بدء العد التنازلي
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.goToHome();
      }
    }, 1000);
  }

  goToHome() {
    this.router.navigate(['/']); // يوجهه لصفحة الهوم
  }

  ngOnDestroy() {
    // تنظيف التايمر عند مغادرة الصفحة
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
