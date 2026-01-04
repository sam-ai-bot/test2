import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrollTo(event: Event, targetId: string): void {
    event.preventDefault();
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
