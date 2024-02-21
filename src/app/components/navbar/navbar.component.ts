import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public navVisibility: boolean = false;

  open() {
    if (!this.navVisibility) {
      console.log(this.navVisibility);
      return (this.navVisibility = true);
    } else {
      console.log(this.navVisibility);
      return (this.navVisibility = false);
    }
  }
}
