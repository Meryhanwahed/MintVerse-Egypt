import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-form',
  imports: [CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
onSubmit(event: Event) {
    event.preventDefault();
    // هنا يمكن إضافة منطق إرسال البيانات للسيرفر
    alert('شكراً لتواصلك معنا! سيتم الرد على استفسارك في أقرب وقت.');
  }
}
