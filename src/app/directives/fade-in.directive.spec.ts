import { describe, it, expect, beforeEach } from 'vitest';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FadeInDirective } from './fade-in.directive';

@Component({
  template: '<div appFadeIn>Test Content</div>',
  standalone: true,
  imports: [FadeInDirective]
})
class TestHostComponent {}

describe('FadeInDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  it('should create the directive', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('[appFadeIn]');
    expect(el).toBeTruthy();
  });

  it('should add fade-in class to element', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('[appFadeIn]');
    expect(el.classList.contains('fade-in')).toBe(true);
  });

  it('should add visible class in test environment (no IntersectionObserver)', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('[appFadeIn]');
    expect(el.classList.contains('visible')).toBe(true);
  });
});
