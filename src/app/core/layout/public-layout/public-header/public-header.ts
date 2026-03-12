import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-public-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss',
})
export class PublicHeader {
  isMenuOpen = false;
  isScrolled = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
