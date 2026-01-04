import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface Course {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  protected courses: Course[] = [
    {
      icon: '\u265E\u265E',
      title: 'Group Classes',
      description: 'Learn chess in a collaborative environment with fellow enthusiasts. Our group classes foster healthy competition, peer learning, and strategic thinking.',
      features: [
        'Small batch sizes (6-10 students)',
        'Interactive group puzzles',
        'Regular tournaments',
        'All skill levels welcome'
      ]
    },
    {
      icon: '\u2654',
      title: 'One-to-One Classes',
      description: 'Get personalized attention with dedicated one-on-one coaching. Perfect for focused improvement and customized learning paths tailored to your goals.',
      features: [
        'Personalized curriculum',
        'Flexible scheduling',
        'In-depth game analysis',
        'Rapid skill development'
      ]
    }
  ];

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
