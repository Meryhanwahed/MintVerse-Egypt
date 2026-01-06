import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-coinfilter',
  imports: [CommonModule],
  templateUrl: './coinfilter.html',
  styleUrl: './coinfilter.css',
})
export class Coinfilter {

  // تعريف العصور
  eras = [
    { id: 'pharaonic', name: 'فرعوني' },
    { id: 'ptolemaic', name: 'بطلمي' },
    { id: 'islamic', name: 'إسلامي' },
    { id: 'royal', name: 'ملكي' },
    { id: 'modern', name: 'جمهوري' }
  ];

  // تعريف المعادن
  metals = [
    { id: 'gold', name: 'ذهب' },
    { id: 'silver', name: 'فضة' },
    { id: 'bronze', name: 'برونز' },
    { id: 'nickel', name: 'نيكل' }
  ];

  selectedEra: string = 'islamic'; // القيمة الافتراضية
  selectedMetal: string = 'gold';

  // لإرسال الفلاتر للكومبوننت الأب (Grid)
  @Output() filterChanged = new EventEmitter<any>();

  selectEra(id: string) {
    this.selectedEra = id;
    this.emitChange();
  }

  selectMetal(id: string) {
    this.selectedMetal = id;
    this.emitChange();
  }

  emitChange() {
    this.filterChanged.emit({
      era: this.selectedEra,
      metal: this.selectedMetal
    });
  }
}
