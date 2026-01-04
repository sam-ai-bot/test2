import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private platformId = inject(PLATFORM_ID);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'fade-in');

    if (isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined') {
      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'visible');
            this.observer?.unobserve(entry.target);
          }
        });
      }, options);

      this.observer.observe(this.el.nativeElement);
    } else {
      // Fallback: make element visible immediately in test/SSR environments
      this.renderer.addClass(this.el.nativeElement, 'visible');
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
