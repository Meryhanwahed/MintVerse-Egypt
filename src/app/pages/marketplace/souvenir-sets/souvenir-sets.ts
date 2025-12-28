import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-souvenir-sets',
  imports: [CommonModule],
  templateUrl: './souvenir-sets.html',
  styleUrl: './souvenir-sets.css',
})
export class SouvenirSets {
constructor(private router: Router) {}

  addToCart(setId: string) {
    console.log('إضافة باقة الهدايا للسلة:', setId);
    // التوجيه لصفحة استكمال الشراء مع تمرير المعرف
    this.router.navigate(['/checkout'], { queryParams: { packageId: setId } });
  }
}
