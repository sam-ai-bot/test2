import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await render(ContactComponent);
  });

  it('should render the contact section with heading', () => {
    expect(screen.getByText('Contact Us')).toBeTruthy();
  });

  it('should render the visit us section', () => {
    expect(screen.getByText('Visit Us')).toBeTruthy();
    expect(screen.getByText(/Chennai, Tamil Nadu/)).toBeTruthy();
  });

  it('should render the get in touch section', () => {
    expect(screen.getByText('Get in Touch')).toBeTruthy();
    expect(screen.getByText('Email Us')).toBeTruthy();
  });
});
