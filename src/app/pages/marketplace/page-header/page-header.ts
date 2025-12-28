import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-page-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
// يمكنك استخدام @Input لجعل العناوين متغيرة حسب الصفحة
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
