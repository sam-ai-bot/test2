import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await render(FooterComponent);
  });

  it('should render the footer with copyright text', () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear} Chess Academy`))).toBeTruthy();
  });

  it('should render social media links', () => {
    expect(screen.getByLabelText('Facebook')).toBeTruthy();
    expect(screen.getByLabelText('Twitter')).toBeTruthy();
    expect(screen.getByLabelText('Instagram')).toBeTruthy();
  });
});
