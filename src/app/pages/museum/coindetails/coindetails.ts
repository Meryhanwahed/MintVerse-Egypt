import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-coindetails',
imports: [CommonModule],
  templateUrl: './coindetails.html',
  styleUrl: './coindetails.css',
})
export class Coindetails {
  @Input() coinData: any;
  activeSide: 'obverse' | 'reverse' = 'obverse';

  // بيانات العملة (يمكن جلبها عبر Service لاحقاً)
  coin = {
    name: 'ريال السلطان فؤاد الأول',
    era: 'العصر الملكي',
    dateGregorian: '1920',
    dateHijri: '1338',
    material: 'فضة عيار 0.833',
    weight: '28',
    diameter: '37.2',
    mintLocation: 'القاهرة، مصر',
    obverseImg: 'assets/museum/front.png',
    reverseImg: 'assets/museum/back.png',
    story: `يعد هذا الريال من أندر وأجمل العملات في عهد السلطان فؤاد الأول قبل أن يتحول لقب "سلطان" إلى "ملك". سك هذا الريال لتأكيد السيادة المصرية في فترة سياسية حرجة، ويتميز بنقوش عربية كلاسيكية دقيقة تعكس مدرسة الخط العربي المصرية في مطلع القرن العشرين. تم استخدام الفضة الخالصة الممزوجة لضمان دوام العملة كقطعة للتداول والحفظ كقيمة مادية.`
  };
}
