import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-featured-mint-collection',
  imports: [CommonModule],
  templateUrl: './featured-mint-collection.html',
  styleUrl: './featured-mint-collection.css',
})
export class FeaturedMintCollection {
constructor(private router: Router) {}

  onAddToCart(coinId: string) {
    console.log('إضافة المنتج للسلة:', coinId);
    // توجيه المستخدم لصفحة الشراء كما طلبتِ
    this.router.navigate(['/checkout'], { queryParams: { id: coinId } });
  }
}
