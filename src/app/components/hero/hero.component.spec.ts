import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  beforeEach(async () => {
    await render(HeroComponent);
  });

  it('should render the hero section with title', () => {
    expect(screen.getByText('Chess Academy')).toBeTruthy();
  });

  it('should render the tagline', () => {
    expect(screen.getByText('Master the Art of Chess with Expert Guidance')).toBeTruthy();
  });

  it('should render the explore courses button', () => {
    expect(screen.getByText('Explore Courses')).toBeTruthy();
  });
});
