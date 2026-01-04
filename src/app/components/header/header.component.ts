import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isClickInsideNav = target.closest('.nav-menu') || target.closest('.nav-toggle');

    if (!isClickInsideNav && this.menuOpen()) {
      this.closeMenu();
    }
  }

  scrollTo(event: Event, targetId: string): void {
    event.preventDefault();
    this.closeMenu();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.clientHeight : 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
}
