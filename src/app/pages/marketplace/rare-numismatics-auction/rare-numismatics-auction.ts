import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // استيراد CurrencyPipe
import { Router } from '@angular/router';
@Component({
  selector: 'app-rare-numismatics-auction',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './rare-numismatics-auction.html',
  styleUrl: './rare-numismatics-auction.css',
})
export class RareNumismaticsAuction {
constructor(private router: Router) {}

  placeBid(auctionId: string) {
    console.log('المزايدة على:', auctionId);
    // هنا يمكنك توجيه المستخدم لصفحة تفاصيل المزاد لتقديم المزايدة
    this.router.navigate(['/auction-details', auctionId]);
  }

  // يمكنك إضافة منطق تحديث الوقت المتبقي للمزاد هنا باستخدام setInterval
}

