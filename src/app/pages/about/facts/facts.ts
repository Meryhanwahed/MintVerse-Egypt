import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-facts',
  imports: [CommonModule],
  templateUrl: './facts.html',
  styleUrl: './facts.css',
})
export class Facts implements OnInit {
  // قيم العدادات
  ageCounter: number = 0;
  issuesCounter: number = 0;
  rareCounter: number = 0;

  // القيم المستهدفة
  readonly TARGET_AGE = 70;
  readonly TARGET_ISSUES = 500;
  readonly TARGET_RARE = 2500;

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters() {
    this.animateValue('ageCounter', 0, this.TARGET_AGE, 2000);
    this.animateValue('issuesCounter', 0, this.TARGET_ISSUES, 2500);
    this.animateValue('rareCounter', 0, this.TARGET_RARE, 3000);
  }

  animateValue(property: 'ageCounter' | 'issuesCounter' | 'rareCounter', start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      this[property] = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
