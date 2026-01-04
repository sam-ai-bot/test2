import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await render(HeaderComponent);
  });

  it('should render the header with brand name', () => {
    expect(screen.getByText('Chess Academy')).toBeTruthy();
  });

  it('should render navigation links', () => {
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Courses')).toBeTruthy();
    expect(screen.getByText('About')).toBeTruthy();
    expect(screen.getByText('Contact')).toBeTruthy();
  });

  it('should have a navigation toggle button', () => {
    expect(screen.getByLabelText('Toggle navigation')).toBeTruthy();
  });

  it('should toggle menu when hamburger is clicked', async () => {
    const toggleButton = screen.getByLabelText('Toggle navigation');
    const navMenu = document.querySelector('.nav-menu');

    expect(navMenu?.classList.contains('active')).toBe(false);

    await fireEvent.click(toggleButton);
    expect(navMenu?.classList.contains('active')).toBe(true);

    await fireEvent.click(toggleButton);
    expect(navMenu?.classList.contains('active')).toBe(false);
  });
});
