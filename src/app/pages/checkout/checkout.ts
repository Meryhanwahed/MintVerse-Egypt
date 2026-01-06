import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-checkout',
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  isOpen = false;
  cartItems: any[] = [
    { id: 1, name: 'ميدالية تذكارية ملكية', category: 'ذهب عيار 21', price: 15000, quantity: 1, image: 'https://cdn-icons-png.flaticon.com/512/2415/2415330.png' }
  ];

  toggleCart() {
    this.isOpen = !this.isOpen;
  }

  get totalPrice() {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  updateQty(item: any, change: number) {
    if (item.quantity + change > 0) {
      item.quantity += change;
    }
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(i => i.id !== id);
  }

  goToCheckout() {
    console.log('إعادة توجيه لصفحة الدفع...');
  }
}
