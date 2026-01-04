import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await render(AboutComponent);
  });

  it('should render the about section with heading', () => {
    expect(screen.getByText('About Us')).toBeTruthy();
  });

  it('should render the welcome message', () => {
    expect(screen.getByText(/Welcome to Chess Academy/)).toBeTruthy();
  });
});
