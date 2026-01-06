import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-museum-integration',
  imports: [CommonModule],
  templateUrl: './museum-integration.html',
  styleUrl: './museum-integration.css',
})
export class MuseumIntegration {

  linkedCoins = [
    {
      id: 1,
      coinName: 'ريال السلطان فؤاد',
      machineName: 'المكبس الهيدروليكي الملكي',
      machineId: 'm-01',
      shortDesc: 'قطعة نادرة عكست دقة السك المصري في أوائل القرن العشرين.',
      coinImage: 'assets/mint-1.jpeg'
    },
    {
      id: 2,
      coinName: 'جنيه قناة السويس',
      machineName: 'آلة السك الرقمية الحديثة',
      machineId: 'm-02',
      shortDesc: 'عملة تذكارية تم سكها بأحدث التقنيات الليزرية لعام 2015.',
      coinImage: 'assets/mint-2.jpg'
    },
    {
      id: 3,
      coinName: 'جنيه افتتاح المتحف المصري',
      machineName: 'آلة السك الرقمية الحديثة',
      machineId: 'm-02',
      coinImage: 'assets/mint-3.jpeg'
    }
  ];

  onViewMachine(machineId: string) {
    console.log('Navigating to machine details:', machineId);
    // هنا يمكنك إضافة Navigation للذهاب لجزء الآلات في الصفحة
  }

  onViewProcess(coinId: number) {
    console.log('Showing process for coin:', coinId);
    // تفعيل Scroll لمرحلة الـ Step-by-Step
  }
}
