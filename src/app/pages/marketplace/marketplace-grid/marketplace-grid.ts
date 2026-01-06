import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // استيراد CurrencyPipe
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-marketplace-grid',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './marketplace-grid.html',
  styleUrl: './marketplace-grid.css',
})
export class MarketplaceGrid implements OnInit {
  coins: any[] = []; // مصفوفة لتخزين بيانات العملات
  showQuickView: boolean = false; // لإظهار أو إخفاء مودال النظرة السريعة

  constructor(private router: Router) {}

  ngOnInit(): void {
    // هنا ستكون البيانات الحقيقية من API أو Service
    this.coins = [
      { id: 'coin1', name: 'جنية الملك فؤاد', year: '1922', era: 'العصر الملكي', price: 15000, imageUrl: 'assets/museum/1.png' },
      { id: 'coin2', name: '50 قرش فضة - الجمهورية', year: '1970', era: 'الجمهورية القديمة', price: 800, imageUrl: 'assets/museum/2.png' },
      { id: 'coin3', name: 'عملة 2 جنيه بوليمر', year: '2022', era: 'إصدارات حديثة', price: 50, imageUrl: 'assets/museum/3.png' },
      { id: 'coin4', name: '10 قروش فضة - الملك فاروق', year: '1940', era: 'العصر الملكي', price: 3500, imageUrl: 'assets/museum/4.png' },
      { id: 'coin5', name: 'عملة 1 جنيه تذكارية', year: '2010', era: 'إصدارات حديثة', price: 150, imageUrl: 'assets/museum/5.png' },
      { id: 'coin6', name: '5 مليمات نحاس - الملك فؤاد', year: '1927', era: 'العصر الملكي', price: 450, imageUrl: 'assets/museum/6.png' },
    ];
  }

  addToCart(coinId: string) {
    console.log('إضافة المنتج للسلة:', coinId);
    // يمكنك إضافة منطق السلة هنا (مثال: حفظ في localStorage أو Service)

    // توجيه المستخدم لصفحة الشراء
    this.router.navigate(['/checkout'], { queryParams: { itemId: coinId } });
  }

  openQuickView(coin: any) {
    // يمكنك هنا تمرير بيانات العملة للمودال
    this.showQuickView = true;
  }

  closeQuickView() {
    this.showQuickView = false;
  }
}
